import React from 'react';
import './TodoListItem.style.scss';

import {TodoType} from "../TodoList.type";

type TodoListItemProps = {
    item: TodoType
};

const TodoListItem: React.FC<TodoListItemProps> = ({ item }) => {
    return (
        <div className='todoitem'>
            <div>{item.title}</div>
        </div>
    );
}

export default TodoListItem;