import React from 'react';
import {StyledInput} from "./Input.module";
import {InputProps} from "../../types";

const Input = (props: InputProps ) => {
    return (
        <StyledInput {...props} />
    );
};

export default Input;