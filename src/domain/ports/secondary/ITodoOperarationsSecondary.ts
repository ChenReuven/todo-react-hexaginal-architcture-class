// use cases
import {ITodo} from "../../models/Todo";

export interface ITodoOperationSecondary {
    addTodo: (todo: ITodo) => void;
    removeTodo: (id: string) => void;
    getAllTodos: () => ITodo[] | Promise<ITodo[]>;
}