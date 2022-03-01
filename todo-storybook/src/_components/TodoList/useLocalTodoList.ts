import { useEffect, useState } from "react";

import { TodoType } from './TodoList.type';

const useLocalTodoList = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);
    useEffect(() => {
        const localStorageTodoItems = localStorage.getItem('@todolist');
        if(!localStorageTodoItems) {
            localStorage.setItem('@todolist', JSON.stringify(todoList));
        } else {
            setTodoList(JSON.parse(localStorageTodoItems));
        }
    }, [ todoList ]);

    return {todoList, setTodoList};
}

export default useLocalTodoList;