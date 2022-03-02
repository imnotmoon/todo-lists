import React from 'react';
import './ModalForm.style.scss';

import FormField from "./FormField/FormField";

type ModalFormProps = {
};


const ModalForm: React.FC<ModalFormProps> = ({}) => {
    return (
        <div className='modal-form-fields'>
            <FormField
                title='title'
                label='제목'
            />

            <FormField
                title='content'
                label='내용'
            />

            <FormField
                title='due'
                label='종료시간'
            />

            <FormField
                title='priority'
                label='우선순위'
            />
        </div>
    );
}

export default ModalForm;