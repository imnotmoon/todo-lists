import React, { useCallback, useReducer } from 'react';

import  { useTodoListContext } from "../TodoListContext/TodoListContext";
import { TodoType } from "./TodoList.type";
import TodoListItem from "./Item/TodoListItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import reducer  from "./TodoList.reducer";

type TodoListProps = {

};

const TodoList: React.FC<TodoListProps> = ({}) => {
    const { todoList, setTodoList } = useTodoListContext();
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
                <div>
                    <Button label='할일 추가' onClick={onClickButton}/>
                </div>
                <section>
                    {todoList.map((todoItem: TodoType) => {
                        return <TodoListItem item={todoItem} />;
                    })}
                </section>
            </div>
            { modal && <Modal close={onClickClose} /> }
        </>
    )
}

export default TodoList;