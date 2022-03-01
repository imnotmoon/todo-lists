import React from 'react';

import useLocalTodoList from "./useLocalTodoList";
import {TodoType} from "./TodoList.type";
import TodoListItem from "./Item/TodoListItem";
import Button from "../Button/Button";

type TodoListProps = {

};

const TodoList: React.FC<TodoListProps> = ({}) => {
    const {todoList, setTodoList} = useLocalTodoList();
    return (
        <div>
            <div>
                <Button label='할일 추가'/>
            </div>
            <section>
                {todoList.map((todoItem: TodoType) => {
                    return <TodoListItem item={todoItem} />;
                })}
            </section>
        </div>
    )
}

export default TodoList;