import React, {createContext, useContext, useEffect, useState} from 'react';

import useLocalTodoList from "../TodoList/useLocalTodoList";
import {TodoType} from "../TodoList/TodoList.type";

type TodoListContextProps = {
    children: React.ReactNode;
};

type TodoListContextType = {
    todoList: TodoType[],
    setTodoList: React.Dispatch<TodoType[]>
}

export const LocalTodoListContext = createContext<TodoListContextType>({
    todoList: [],
    setTodoList: () => {}
});

const TodoListContext: React.FC<TodoListContextProps> = ({ children }) => {
    const { todoList, setTodoList } = useLocalTodoList();

    return (
        <LocalTodoListContext.Provider value={{todoList, setTodoList}}>
            {children}
        </LocalTodoListContext.Provider>
    )
}

export default TodoListContext;