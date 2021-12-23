import React from 'react';
import {paddingControlsArray} from "../../constants";

const PaddingControls = ({onHandleInput, editSettings}) => {

    return (
        <div className={"controls-container padding-controls-container"}>
            {paddingControlsArray.map(({name, label}) => {
            return  <div className={"padding-control"} key={name}>
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
    );
};

export default PaddingControls;