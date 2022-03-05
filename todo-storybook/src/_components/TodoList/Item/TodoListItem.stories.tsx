import TodoListItem, {TodoListItemProps} from "./TodoListItem";
import { Meta, Story } from '@storybook/react';

export default {
    title: 'TodoList/TodoListItem',
    component: TodoListItem,
} as Meta;

const Template: Story<TodoListItemProps> = args => <TodoListItem { ...args } />;

export const Default = Template.bind({});

Default.args = {
    item: {
        title: 'this is a title',
        content: 'this is a content...this is a content...this is a content',
        timestamp: new Date(),
        due: new Date(),
        priority: 1,
    }
}