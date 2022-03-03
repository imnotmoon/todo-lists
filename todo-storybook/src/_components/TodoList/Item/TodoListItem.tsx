import React from 'react';
import './TodoListItem.style.scss';

import {TodoType} from "../TodoList.type";

type TodoListItemProps = {
    item: TodoType
};

const TodoListItem: React.FC<TodoListItemProps> = ({ item }) => {
    return (
        <div className='todoitem'>
            <div className='todoitem-title'>{item.title}</div>
            <div className='todoitem-content'>{item.content}</div>
            <div className='todoitem-date'>{item.timestamp.toString()}</div>
        </div>
    );
}

export default TodoListItem;