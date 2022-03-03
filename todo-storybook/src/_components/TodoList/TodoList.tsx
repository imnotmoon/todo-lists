import React, {useCallback, useContext, useReducer} from 'react';
import './TodoList.style.scss';

import { LocalTodoListContext } from "../TodoListContext";
import { TodoType } from "./TodoList.type";
import TodoListItem from "./Item/TodoListItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import reducer  from "./TodoList.reducer";

type TodoListProps = {

};

const TodoList: React.FC<TodoListProps> = ({}) => {
    const { todoList } = useContext(LocalTodoListContext);
    const [ modal, dispatchModal ] = useReducer(reducer, false);

    const onClickButton = useCallback((e: React.MouseEvent) => {
        dispatchModal("OPEN");
    }, []);

    const onClickClose = useCallback(() => {
        dispatchModal("CLOSE");
    }, [])

    return (
        <>
            <div>
                <div className='todolist-buttonframe'>
                    <Button label='할일 추가' onClick={onClickButton}/>
                </div>
                <section>
                    {todoList.map((todoItem: TodoType) => {
                        return <TodoListItem item={todoItem} key={todoItem.title +todoItem.timestamp.toString()}/>;
                    })}
                </section>
            </div>
            { modal && <Modal close={onClickClose} /> }
        </>
    )
}

export default TodoList;