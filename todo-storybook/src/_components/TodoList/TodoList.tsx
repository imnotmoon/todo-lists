import React from 'react';

import useLocalTodoList from "./useLocalTodoList";
import {TodoType} from "./TodoList.type";
import TodoListItem from "./Item/TodoListItem";

type TodoListProps = {

};

const TodoList: React.FC<TodoListProps> = ({}) => {
    const {todoList, setTodoList} = useLocalTodoList();
    return (
        <div>
            {todoList.map((todoItem: TodoType) => {
                return <TodoListItem item={todoItem} />;
            })};
        </div>
    )
}

export default TodoList;