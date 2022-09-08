import {ITodoOperationSecondary} from "../../domain/ports/secondary/ITodoOperarationsSecondary";
import {ITodoDtoRequest} from "../../adapters/services/dtos/todoDtoRequest";
import {ITodoDtoResponse} from "../../adapters/services/dtos/todoDtoResponse";
import {TodoInMemoryService} from "../in-memory/todo-in-memory";

export class ImMemoryDataAccessImplementation implements ITodoOperationSecondary {
  addTodo(todo: ITodoDtoRequest): void {
    // optional: convert TODO to secondary request TODO
    TodoInMemoryService.addTodo(todo);
  }

  getAllTodos(): Promise<ITodoDtoResponse[]> {
    // return TodoInMemoryService.getAllTodos();
    return Promise.resolve(TodoInMemoryService.getAllTodos());
  }

  removeTodo(id: string): void {
    TodoInMemoryService.removeTodo(id);
  }

}