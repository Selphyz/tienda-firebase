import React, { FunctionComponent } from 'react';
import './custom-button.styles.scss';

type aFuncion = () => void;
type CustomButton = {
    type?: any,
    value?: any,
    onClick?: aFuncion,
    isgooglesignin?: boolean
}
export const CustomButton: FunctionComponent<CustomButton> = (props) => (
    <button className={`${props.isgooglesignin ? 'google-sign-in' : ''} custom-button`} {...props}>
        {props.children}
    </button>
);
