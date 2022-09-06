import {ITodoOperationSecondary} from "../../domain/ports/secondary/ITodoOperarationsSecondary";
import {ITodoDtoRequest} from "../../adapters/services/dtos/todoDtoRequest";
import {ITodoDtoResponse} from "../../adapters/services/dtos/todoDtoResponse";

export class SessionStorageDataAccessImplementation implements ITodoOperationSecondary {
  addTodo(todo: ITodoDtoRequest): void {
    const todosString = window.sessionStorage.getItem('todos') || '';
    const todos = todosString ? JSON.parse(todosString) : [];
    window.sessionStorage.setItem('todos', JSON.stringify([...todos, todo]));
  }

  getAllTodos(): Promise<ITodoDtoResponse[]> {
    const todos = window.sessionStorage.getItem('todos');
    const todosResult = todos ? JSON.parse(todos) : [];
    return Promise.resolve(todosResult);
  }

  removeTodo(id: string): void {
    // ...
  }

}