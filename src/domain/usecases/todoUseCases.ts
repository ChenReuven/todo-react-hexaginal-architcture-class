// import {ITodoRepository} from "../ports/TodoRepository";
// import {ITodo} from "../models/Todo";
//
// // Implementation: class
//
// class TodoUseCasesClz implements ITodoRepository {
//     constructor(private  todoRepository: ITodoRepository) {
//     }
//
//     addTodo(todo: ITodo): void {
//         this.todoRepository.addTodo(todo);
//     }
//
//     getAllTodos(): ITodo[] | Promise<ITodo[]> {
//         return this.todoRepository.getAllTodos();
//     }
//
//     removeTodo(id: string): void {
//         return this.todoRepository.removeTodo(id);
//     }
// }
//
// // Implementation: function
// const TodoUseCases = (todoRepository: ITodoRepository): ITodoRepository =>
//     ({
//         addTodo: (todo: ITodo): void => {
//             todoRepository.addTodo(todo);
//         },
//         getAllTodos: (): ITodo[] | Promise<ITodo[]> => {
//             return todoRepository.getAllTodos();
//         },
//         removeTodo: (id: string): void => {
//             todoRepository.removeTodo(id);
//         }
//     })

export const x = 2;