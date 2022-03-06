import { useEffect, useState } from "react";

import { TodoType } from './TodoList.type';

const useLocalTodoList = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    useEffect(() => {
        if(!localStorage.getItem('@todolist')) {
            localStorage.setItem('@todolist', JSON.stringify([]));
        }
    }, []);

    useEffect(() => {
        console.log(todoList);
    }, [todoList])

    const mutateTodoList = (todoList: TodoType[]) => {
        setTodoList(todoList);
        localStorage.setItem('@todolist', JSON.stringify(todoList));
    }

    useEffect(() => {
        const localStorageTodoItems = localStorage.getItem('@todolist');

        if(!localStorageTodoItems || localStorageTodoItems.length === 0) {
            localStorage.setItem('@todolist', JSON.stringify(todoList));
        } else {
            (JSON.parse(localStorageTodoItems) as TodoType[]).length > todoList.length
                ? setTodoList(JSON.parse(localStorageTodoItems))
                : localStorage.setItem('@todolist', JSON.stringify(todoList));
        }
    }, [todoList, setTodoList]);

    return {todoList, setTodoList : mutateTodoList};
}

export default useLocalTodoList;