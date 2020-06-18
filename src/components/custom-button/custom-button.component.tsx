import React, { FunctionComponent } from 'react';
import './custom-button.styles.scss';

type myFuncion = () => void;
type CustomButton = {
    children?: any,
    type?: any,
    value?: string,
    onClick?: myFuncion,
    isgooglesignin?: boolean,
    inverted?: boolean
}
const CustomButton: FunctionComponent<CustomButton> = ({ children, isgooglesignin, inverted, ...otrosProps }: CustomButton) => (
    <button className={`${inverted ? 'inverted' : ''} ${isgooglesignin ? 'google-sign-in' : ''} custom-button`} {...otrosProps}>
        {children}
    </button>
);
export default CustomButton;