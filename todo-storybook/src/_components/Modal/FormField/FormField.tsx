import React from 'react';
import {Field} from "formik";

import './FormField.style.scss';

type FormFieldProps = {
    title: string;
    label: string;
    placeholder?: string;
};

const FormField: React.FC<FormFieldProps> = ({ title, label, placeholder }) => {
    return (
        <div className='modal-form-field'>
            <label htmlFor={title}>{label}</label>
            <Field id={title} name={title} placeholder={placeholder ? placeholder : `${label}을(를) 입력해주세요.`}/>
        </div>
    );
}

export default FormField;