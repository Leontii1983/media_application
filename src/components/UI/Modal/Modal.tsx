import React from 'react';
import {ModalContent, ModalWindow} from "./Modal.module";
import {ModalProps} from "../../types";

const Modal = ({children}: ModalProps) => {
    return (
        <ModalWindow>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalWindow>
    );
};

export default Modal;