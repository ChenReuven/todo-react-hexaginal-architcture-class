import {ITodo} from "../models/Todo";
import {ITodoOperationPrimary} from "../ports/primary/ITodoOperarationsPrimary";
import {ITodoOperationSecondary} from "../ports/secondary/ITodoOperarationsSecondary";

class TodoService implements ITodoOperationPrimary {
  constructor(private todoDataAccessImpl: ITodoOperationSecondary) {
  }

  addTodo(todo: ITodo): void {
    this.todoDataAccessImpl.addTodo();
  }

  getAllTodos(): ITodo[] | Promise<ITodo[]> {
    return undefined;
  }

  removeTodo(id: string): void {
  }

}