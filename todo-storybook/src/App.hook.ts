import { useEffect} from "react";

const useInitTodoList = () => {
    useEffect(() => {
        console.log(localStorage.getItem('@todolist'));
    }, []);
};

export default useInitTodoList;