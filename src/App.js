import React, {useState, useEffect} from 'react';

import {useDebounce} from 'use-debounce';
import {dataURLtoFile} from "./utils/dataURLtoFile";
import {getOriginExt} from "./utils/getOriginExt";
import JSZip from "jszip";
import {saveAs} from 'file-saver';

import {
    options,
    settingsObj,
    ORIGIN_FILE_NAME,
    EDITED_FILE_NAME,
    DEFAULT_SHADOW_COLOR,
    PNG_FILE_EXT,
    DEFAULT_CANVAS_BACKGROUND_COLOR,
    IMAGES_FOLDER_NAME, PREVIEW_IMAGE_ALT, FILE_PATH_LABEL, DEBOUNCE_DELAY
} from "./constants";

import Select from 'react-select'
import Dropzone from "./components/Dropzone";
import PaddingControls from "./components/PaddingControlsContainer";
import Canvas from "./components/Canvas";
import SettingsControls from "./components/SettingControls";
import ShadowControlsContainer from "./components/ShadowControlsContainer";

import "./App.scss"


const App = () => {
    const [file, setFiles] = useState({});
    const [editedImageUrl, setEditedImageUrl] = useState(null);
    const [editSettings, setEditSettings] = useState(settingsObj);
    const [isRenderCanvas, setIsRenderCanvas] = useState(false);
    const [url, setUrl] = useState('');
    const [imgType, setImgType] = useState(options[0])
    const [shadowColor, setShadowColor] = useState(DEFAULT_SHADOW_COLOR)

    const isNotEmpty = file.hasOwnProperty(FILE_PATH_LABEL);
    const [debouncedEditSettings] = useDebounce(editSettings, DEBOUNCE_DELAY);

    const canvasFunc = () => {
        const canvas = document.querySelector("#canvas");
        let imgObj = new Image();
        imgObj.src = url
        const ctx = canvas?.getContext("2d");

        imgObj.onload = function () {
            canvas.height = (imgObj.naturalHeight + editSettings.paddingTop + editSettings.paddingBottom) * editSettings.scale;
            canvas.width = (imgObj.naturalWidth + editSettings.paddingLeft + editSettings.paddingRight) * editSettings.scale;
            if (imgType.label !== PNG_FILE_EXT) {
                ctx.fillStyle = DEFAULT_CANVAS_BACKGROUND_COLOR;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            ctx.filter = `blur(${editSettings.blur}px) sepia(${editSettings.sepia}%) brightness(${editSettings.brightness}%) drop-shadow(${editSettings.shadowWidth}px ${editSettings.shadowHeight}px ${editSettings.shadowBlur}px ${shadowColor})`;
            ctx.scale(editSettings.scale, editSettings.scale);
            let w = imgObj.naturalWidth;
            let h = imgObj.naturalHeight;
            ctx.drawImage(imgObj, editSettings.paddingLeft, editSettings.paddingTop, w, h);

            setEditedImageUrl(canvas?.toDataURL(imgType.value, editSettings.quality))
        }
    };

    const handleInput = (e) => {
        const {value, name} = e.target;
        setEditSettings({...editSettings, [name]: Number(value)})
    };

    const handleSelect = (value) => {
        setImgType(value)
    };

    const reset = () => {
        setEditSettings(settingsObj)
        setShadowColor(DEFAULT_SHADOW_COLOR)
    };

    const download = () => {
        const editedFile = dataURLtoFile(editedImageUrl);
        let zip = new JSZip();
        zip.file(`${ORIGIN_FILE_NAME}.${getOriginExt(file)}`, file, {base64: true});
        zip.file(`${EDITED_FILE_NAME}.${imgType.label}`, editedFile);
        zip.generateAsync({type: "blob"})
            .then(function (content) {
                saveAs(content, IMAGES_FOLDER_NAME);
            });
    };

    useEffect(() => {
        canvasFunc()
    }, [file, debouncedEditSettings, shadowColor, imgType, url]);

    return (
        <div className={"App"}>
            <Dropzone
                setUrl={setUrl}
                onSetIsRenderCanvas={setIsRenderCanvas}
                onSetFiles={setFiles}
            />
            <div className={"preview-container"}>
                <SettingsControls
                    editSettings={editSettings}
                    onHandleInput={handleInput}
                />
                <PaddingControls
                    editSettings={editSettings}
                    onHandleInput={handleInput}
                />
                <ShadowControlsContainer
                    editSettings={editSettings}
                    onHandleInput={handleInput}
                    color={shadowColor}
                    onSetShadowColor={setShadowColor}
                />
                {isNotEmpty && <div className="image-container">
                    <img
                        id={"img"}
                        alt={PREVIEW_IMAGE_ALT}
                        key={file.name}
                        src={file.preview}
                        className="image"
                    />
                </div>}
            </div>
            <div className={'download-container'}>
                <Select
                    options={options}
                    defaultValue={imgType}
                    onChange={handleSelect}
                    name={'imgType'}
                    className={'select'}
                />
                <button
                    className={"button"}
                    onClick={reset}
                >
                    Reset
                </button>
                <button
                    className={"download button"}
                    onClick={download}
                    disabled={!isNotEmpty}
                >
                    Save
                </button>
            </div>
            {isRenderCanvas && <div className="edit-container">
                <Canvas/>
            </div>}
        </div>
    );
};

export default App;



