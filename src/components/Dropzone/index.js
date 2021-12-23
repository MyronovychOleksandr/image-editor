import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {makeURL} from "../../utils/makeUrl";

const Dropzone = ({onSetIsRenderCanvas, setUrl, onSetFiles}) => {
    const onDrop = useCallback((acceptedFiles) => {
        onSetIsRenderCanvas(true)
        makeURL(acceptedFiles[0], setUrl)
        const filesUploaded = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        onSetFiles(filesUploaded[0])
    })

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        multiple: false,
        onDrop
    });

    return (
        <section className="dropzone-container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
        </section>
    );
};

export default Dropzone;