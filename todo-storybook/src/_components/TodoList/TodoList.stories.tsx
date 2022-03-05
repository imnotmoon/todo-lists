import { Meta, Story } from "@storybook/react";
import TodoList from "./TodoList";
import {TodoType} from "./TodoList.type";

import {LocalTodoListContext} from "../TodoListContext";
import TodoListContext from "../TodoListContext/TodoListContext";
import {useContext, useEffect} from "react";

export default {
    title: 'TodoList',
    component: TodoList,
} as Meta;

export const Default: Story<{}> = () => {
    return (
        <TodoListContext initialValue={mockData}>
            <TodoList />
        </TodoListContext>
    )
};

Default.storyName = 'TodoList';
Default.args = {};

const mockData: TodoType[] = [
    {
        title: '첫번째 일정',
        content: '내용내용내용',
        timestamp: new Date(),
        due: new Date()
    },
    {
        title: '두번째 일정',
        content: '내용내용내용',
        timestamp: new Date(),
        due: new Date()
    },
    {
        title: '두번째 일정',
        content: '내용내용내용',
        timestamp: new Date(),
        due: new Date()
    },{
        title: '두번째 일정',
        content: '내용내용내용',
        timestamp: new Date(),
        due: new Date()
    }
]