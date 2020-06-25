import React from 'react';

import './form-input.styles.scss';

type MyFunctionType = (e: any) => void;
interface FormProps {
    name: string;
    type: string;
    handleChange: MyFunctionType;
    label: string;
    value: any;
    required?: any
}
export const FormInput = (props: FormProps) => (
    <div className="group">
        <input type={`${props.type}`} className="form-input" onChange={props.handleChange} name={`${props.name}`} {...props.required} />
        {
            props.label ?
                (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                    {props.label}
                </label>)
                : null
        }
    </div>
)