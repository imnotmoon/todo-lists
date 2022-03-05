import { useEffect, useState } from "react";

import { TodoType } from './TodoList.type';

const useLocalTodoList = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    useEffect(() => {
        localStorage.setItem('@todolist', JSON.stringify(todoList));
    }, [todoList])

    useEffect(() => {
        const localStorageTodoItems = localStorage.getItem('@todolist');

        if(!localStorageTodoItems || localStorageTodoItems.length === 0) {
            localStorage.setItem('@todolist', JSON.stringify(todoList));
        } else {
            (JSON.parse(localStorageTodoItems) as TodoType[]).length !== todoList.length
                && setTodoList(JSON.parse(localStorageTodoItems));
        }
    }, [todoList, setTodoList]);

    return {todoList, setTodoList};
}

export default useLocalTodoList;