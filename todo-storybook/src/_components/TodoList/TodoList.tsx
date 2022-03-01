import React, {useCallback, useContext} from 'react';

import  { useTodoListContext } from "../TodoListContext/TodoListContext";
import { TodoType } from "./TodoList.type";
import TodoListItem from "./Item/TodoListItem";
import Button from "../Button/Button";

type TodoListProps = {

};

const TodoList: React.FC<TodoListProps> = ({}) => {
    const { todoList, setTodoList } = useTodoListContext();

    const onClickButton = useCallback((e: React.MouseEvent) => {
        console.log('button clicked');
    }, []);

    return (
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
    )
}

export default TodoList;