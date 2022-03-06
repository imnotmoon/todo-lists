import React from 'react';
import './TodoListItem.style.scss';

import {TodoType} from "../TodoList.type";
import {formatDate} from "../../utils/date";
import useLocalTodoList from "../useLocalTodoList";

export type TodoListItemProps = {
    item: TodoType;
    idx: number;
};

const TodoListItem: React.FC<TodoListItemProps> = ({ item, idx }) => {
    const { todoList, setTodoList } = useLocalTodoList();

    const onClickDeleteButton = () => {
        todoList.splice(idx, 1);
        const newList = [...todoList];
        setTodoList(newList);
    }

    return (
        <div className='todoitem'>
            <div className='todoitem-title'>{item.title}</div>
            <div className='todoitem-content'>{item.content}</div>
            <div className='todoitem-date'>{typeof item.timestamp === 'string' ? formatDate(new Date(item.timestamp)) : formatDate(item.timestamp)}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

export default TodoListItem;