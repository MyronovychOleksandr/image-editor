import React from 'react';
import {
    BLUR_MAX_VALUE,
    BLUR_MIN_VALUE, BLUR_STEP, BRIGHTNESS_MAX_VALUE, BRIGHTNESS_MIN_VALUE, BRIGHTNESS_STEP,
    QUALITY_MAX_VALUE,
    QUALITY_MIN_VALUE,
    QUALITY_STEP,
    SCALE_MAX_VALUE,
    SCALE_MIN_VALUE,
    SCALE_STEP, SEPIA_MAX_VALUE, SEPIA_MIN_VALUE, SEPIA_STEP
} from "../../constants";

const SettingsControls = ({onHandleInput, editSettings,}) => {

    return (
        <div className={"controls-container"}>
            <div className={'control'}>
                <span className={'control-value'}>{editSettings.scale}</span>
                <label>
                    <input type="range"
                           id="scale"
                           name="scale"
                           value={editSettings.scale}
                           onChange={onHandleInput}
                           min={SCALE_MIN_VALUE}
                           max={SCALE_MAX_VALUE}
                           step={SCALE_STEP}
                    />
                    Scale</label>
            </div>
            <div className={'control'}>
                <span className={'control-value'}>{`${Math.round(editSettings.quality * 100) }%`}</span>
                <label>
                    <input
                        type="range"
                        id="quality"
                        name="quality"
                        value={editSettings.quality}
                        min={QUALITY_MIN_VALUE}
                        max={QUALITY_MAX_VALUE}
                        step={QUALITY_STEP}
                        onChange={onHandleInput}
                    />
                    Quality</label>
            </div>
            <div className={'control'}>
                <span className={'control-value'}>{`${editSettings.blur}px`}</span>
                <label>
                    <input
                        type="range"
                        id="blur"
                        name="blur"
                        value={editSettings.blur}
                        min={BLUR_MIN_VALUE}
                        max={BLUR_MAX_VALUE}
                        step={BLUR_STEP}
                        onChange={onHandleInput}
                    />
                    Blur</label>
            </div>
            <div className={'control'}>
                <span className={'control-value'}>{`${editSettings.sepia}%`}</span>
                <label>
                    <input
                        type="range"
                        id="sepia"
                        name="sepia"
                        value={editSettings.sepia}
                        min={SEPIA_MIN_VALUE}
                        max={SEPIA_MAX_VALUE}
                        step={SEPIA_STEP}
                        onChange={onHandleInput}
                    />
                    Sepia</label>
            </div>
            <div className={'control'}>
                <span className={'control-value'}>{`${editSettings.brightness}%`}</span>
                <label>
                    <input
                        type="range"
                        id="brightness"
                        name="brightness"
                        value={editSettings.brightness}
                        min={BRIGHTNESS_MIN_VALUE}
                        max={BRIGHTNESS_MAX_VALUE}
                        step={BRIGHTNESS_STEP}
                        onChange={onHandleInput}
                    />
                    Brightness</label>
            </div>
        </div>
    );
};

export default SettingsControls;