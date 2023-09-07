import React from 'react';
import {SelectProps} from "../../types";


const Select = ({options, defaultValue, value, onChange} : SelectProps) => {
    return (
        <div style={{width: '200px'}}>
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map((option)=>
                <option value={option.value} key={option.value}>{option.name}</option>
            )}
        </select>
        </div>
    );
};

export default Select;