// use cases
import {ITodoDtoRequest} from "../../../adapters/services/dtos/todoDtoRequest";
import {ITodoDtoResponse} from "../../../adapters/services/dtos/todoDtoResponse";

export interface ITodoOperationSecondary {
    addTodo: (todo: ITodoDtoRequest) => void;
    removeTodo: (id: string) => void;
    getAllTodos: () => Promise<ITodoDtoResponse[]>;
}