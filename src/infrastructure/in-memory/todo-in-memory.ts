import {ITodoDtoRequest} from "../../adapters/services/dtos/todoDtoRequest";
import {ITodoDtoResponse} from "../../adapters/services/dtos/todoDtoResponse";

export const TodoInMemoryService: any = {
  todos: [],
  getAllTodos: (): Promise<ITodoDtoResponse[]>=> {
    // return Promise.resolve(TodoInMemoryService.todos);
    return TodoInMemoryService.todos;
  },
  addTodo: (todo: ITodoDtoRequest): void => {
    TodoInMemoryService.todos = [...TodoInMemoryService.todos, todo];
  },
  removeTodo: (id: string) => {
    TodoInMemoryService.todos = TodoInMemoryService.todos.filter((todo: ITodoDtoResponse): boolean => todo.id !== id)
  }
}