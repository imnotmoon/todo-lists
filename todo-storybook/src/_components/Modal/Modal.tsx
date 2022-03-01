import React from 'react';
import './Modal.style.scss';

import {TodoType} from "../TodoList/TodoList.type";
import ModalForm from "./ModalForm";

type ModalProps = {
    close: () => void;
};

type ModalValues = TodoType;

const Modal: React.FC<ModalProps> = ({ close }) => {
    return (
      <div className='modal'>
          <div className='modal-window'>
              <ModalForm />
              <section className='modal-window-buttons'>
                  <button>확인</button>
                  <button onClick={close}>닫기</button>
              </section>
          </div>
      </div>
    );
}

export default Modal;