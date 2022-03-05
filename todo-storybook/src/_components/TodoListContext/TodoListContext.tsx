import React, {createContext, useContext, useEffect, useState} from 'react';

import useLocalTodoList from "../TodoList/useLocalTodoList";
import {TodoType} from "../TodoList/TodoList.type";

type TodoListContextProps = {
    children: React.ReactNode;
    initialValue?: TodoType[];
};

type TodoListContextType = {
    todoList: TodoType[],
    setTodoList: React.Dispatch<TodoType[]>
}

export const LocalTodoListContext = createContext<TodoListContextType>({
    todoList: [],
    setTodoList: () => {}
});

const TodoListContext: React.FC<TodoListContextProps> = ({ children, initialValue }) => {
    const { todoList, setTodoList } = useLocalTodoList();

    useEffect(() => {
        initialValue && setTodoList(initialValue);
    }, [])

    return (
        <LocalTodoListContext.Provider value={{todoList, setTodoList}}>
            {children}
        </LocalTodoListContext.Provider>
    )
}

export default TodoListContext;