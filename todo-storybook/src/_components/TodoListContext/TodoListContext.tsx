import React, {createContext, useContext} from 'react';

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

export const useTodoListContext = () => {
    return useContext(LocalTodoListContext);
}

const TodoListContext: React.FC<TodoListContextProps> = ({ children }) => {
    // const { todoList, setTodoList } = {todoList: [], setTodoList: () => {}};
    const { todoList, setTodoList } = useLocalTodoList();

    return (
        <LocalTodoListContext.Provider value={{todoList, setTodoList}}>
            {children}
        </LocalTodoListContext.Provider>
    )
}

export default TodoListContext;