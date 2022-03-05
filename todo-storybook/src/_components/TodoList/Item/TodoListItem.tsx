import React from 'react';
import './TodoListItem.style.scss';

import {TodoType} from "../TodoList.type";
import {formatDate} from "../../utils/date";

export type TodoListItemProps = {
    item: TodoType
};

const TodoListItem: React.FC<TodoListItemProps> = ({ item }) => {
    return (
        <div className='todoitem'>
            <div className='todoitem-title'>{item.title}</div>
            <div className='todoitem-content'>{item.content}</div>
            <div className='todoitem-date'>{formatDate(item.timestamp as Date)}</div>
            <button>삭제</button>
        </div>
    );
}

export default TodoListItem;