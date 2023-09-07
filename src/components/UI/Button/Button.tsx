import React from 'react';
import {StyledButton} from "./Button.module";
import {ButtonProps} from "../../types";

const Button = ({children, ...props} : ButtonProps) => {
    return (
        <div>
            <StyledButton {...props}>
                {children}
            </StyledButton>
        </div>
    );
};

export default Button;