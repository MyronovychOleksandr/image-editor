import React from 'react';

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
                           min="0.2"
                           max="3"
                           step="0.1"
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
                        min="0"
                        max="1"
                        step="0.01"
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
                        min="0"
                        max="100"
                        step="1"
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
                        min="0"
                        max="100"
                        step="1"
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
                        min="0"
                        max="100"
                        step="1"
                        onChange={onHandleInput}
                    />
                    Brightness</label>
            </div>
        </div>
    );
};

export default SettingsControls;