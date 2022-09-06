import {ITodoOperationSecondary} from "../../domain/ports/secondary/ITodoOperarationsSecondary";
import {ITodoDtoRequest} from "../../adapters/services/dtos/todoDtoRequest";
import {ITodoDtoResponse} from "../../adapters/services/dtos/todoDtoResponse";

export class LocalStorageDataAccessImplementation implements ITodoOperationSecondary {
  addTodo(todo: ITodoDtoRequest): void {
    const todosString = window.localStorage.getItem('todos') || '';
    const todos = todosString ? JSON.parse(todosString) : [];
    window.localStorage.setItem('todos', JSON.stringify([...todos, todo]));
  }

  getAllTodos(): Promise<ITodoDtoResponse[]> {
    const todos = window.localStorage.getItem('todos');
    const todosResult = todos ? JSON.parse(todos) : [];
    return Promise.resolve(todosResult);
  }

  removeTodo(id: string): void {
    // ...
  }

}