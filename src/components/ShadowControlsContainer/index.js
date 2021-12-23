import React from 'react';
import {HexColorPicker} from "react-colorful";
import {shadowControlsArray} from "../../constants";

const ShadowControlsContainer = ({onHandleInput, color, onSetShadowColor, editSettings}) => {

    const handleColorInput = (value) => {
        onSetShadowColor(value)
    }

    return (
        <div className={"controls-container shadow-controls-container"}>
            <div className={"shadow-inputs"}>
                {shadowControlsArray.map(({name, label}) => {
                    return <div className={"padding-control"} key={name}>
                        <label>
                            <input type="number"
                                   id={name}
                                   name={name}
                                   value={editSettings[name]}
                                   onChange={onHandleInput}
                            />
                            {label}</label>
                    </div>
                })}
            </div>
            <div>
                <span>Shadow color</span>
                <HexColorPicker color={color} onChange={handleColorInput}/>
            </div>
        </div>
    );
};

export default ShadowControlsContainer;