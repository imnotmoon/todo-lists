export type TodoType = {
    title: string;
    content: string;
    timestamp: Date | string;
    due: Date | string;
    priority?: number;
};