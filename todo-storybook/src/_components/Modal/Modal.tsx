import React, { useContext, useEffect, useRef } from 'react';
import './Modal.style.scss';
import { Formik, Form } from 'formik';

import ModalForm from "./ModalForm";
import {TodoType} from "../TodoList/TodoList.type";
import { LocalTodoListContext } from "../TodoListContext";
import {formatDate} from "../utils/date";

export type ModalProps = {
    close: () => void;
};

type ModalValue = TodoType;

const Modal: React.FC<ModalProps> = ({ close }) => {
    const { todoList, setTodoList } = useContext(LocalTodoListContext);
    const modalBackgroundEl = useRef<HTMLDivElement>(null);
    const modalFrameEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClickOutsideModal = (e: MouseEvent) => {
            const isClicked = modalBackgroundEl.current?.contains(e.target as Node);
            const isOutsideClicked = !modalFrameEl.current?.contains(e.target as Node);
            if(isClicked && isOutsideClicked) {
                close();
            }
        }
        document.body.addEventListener('click', onClickOutsideModal);
        return () => {
            document.body.removeEventListener('click', onClickOutsideModal);
        };
    }, []);

    const onClickSubmit = (values: Omit<ModalValue, 'timestamp'> & { due: Date | string }) => {
        setTodoList([...todoList, {
            ...values,
            priority: +(values.priority || '0'),
            timestamp: new Date(),
        }]);
        close();
    }

    return (
      <div className='modal' ref={modalBackgroundEl}>
          <Formik
              initialValues={{
                  title: '',
                  content: '',
                  date: new Date(),
                  due: formatDate(new Date()),
                  priority: 0
              }}
              onSubmit={onClickSubmit}
          >
              <Form className='modal-form'>
                  <div className='modal-form-window' ref={modalFrameEl}>
                      <h3>할일 추가하기</h3>
                      <ModalForm />
                      <section className='modal-window-buttons'>
                          <button type='submit'>확인</button>
                          <button onClick={close}>닫기</button>
                      </section>
                  </div>
              </Form>
            </Formik>
      </div>
    );
}

export default Modal;