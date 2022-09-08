import {ITodoDtoRequest} from "./dtos/todoDtoRequest";
import {ITodoDtoResponse} from "./dtos/todoDtoResponse";
import {ITodoOperationPrimary} from "../../domain/ports/primary/ITodoOperarationsPrimary";
import {ITodoOperationSecondary} from "../../domain/ports/secondary/ITodoOperarationsSecondary";

export class TodoService implements ITodoOperationPrimary {
  constructor(private todoDataAccessImpl: ITodoOperationSecondary) {
  }

  addTodo(todo: ITodoDtoRequest): void {
    // you can convert from Dto To other Todo Object if needed here
    if(!todo.text.length){
      throw new Error("Todo text is required");
      // You can send error to server or send to notifier service that will pop up an error message
    }
    if(todo.text.length < 2) {
      // notiferService.notify("text")
      throw new Error("Todo text must be greater than 5");
      // You can send error to server or send to notifier service that will pop up an error message
    }
    // optional: convert request TODO to TODO
    this.todoDataAccessImpl.addTodo(todo);
  }

  getAllTodos(): Promise<ITodoDtoResponse[]> {
    return this.todoDataAccessImpl.getAllTodos();
  }

  removeTodo(id: string): void {
    this.todoDataAccessImpl.removeTodo(id);
  }

}

// OR
export const todoService = (todoDataAccessImpl: ITodoOperationSecondary): ITodoOperationPrimary  => ({
  addTodo: (todo: ITodoDtoRequest): void => {
    todoDataAccessImpl.addTodo(todo);
  },
  removeTodo: (id: string): void => {
    todoDataAccessImpl.removeTodo(id);
  },
  getAllTodos: (): Promise<ITodoDtoResponse[]> => {
    return todoDataAccessImpl.getAllTodos();
  }
})