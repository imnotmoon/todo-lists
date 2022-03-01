import React from 'react';
import './Modal.style.scss';

import {TodoType} from "../TodoList/TodoList.type";
import ModalForm from "./ModalForm";

type ModalProps = {
    
};

type ModalValues = TodoType;

const Modal: React.FC<ModalProps> = ({}) => {
    return (
      <div className='modal'>
          <div className='modal-window'>
              <ModalForm />
          </div>
      </div>
    );
}

export default Modal;