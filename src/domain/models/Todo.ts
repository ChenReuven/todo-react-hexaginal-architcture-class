export interface ITodo {
  id?: number;
  text: string;
  isDone?: boolean;
}
// OR
// export type ITodo =  {
//   id: number;
//   text: string;
//   isDone?: boolean;
// }

// OR
// abstract class AbstractTodo {
//   id: number;
//   text: string;
//   isDone?: boolean;
//
//   constructor(private text: string = '') {
//     if(!text) {
//       throw 'Todo Text Must Contain Value!'
//     }
//   }
//
// }


// Or With Class
// export class Todo {
//   id: number | null = null;
//   isDone?: boolean = false;
//
//   constructor(private text: string = '') {
//     if(!text) {
//       throw 'Todo Text Must Contain Value!'
//     }
//   }
// }

// // Use Cases
// export interface ITaskOperations {
//   addTask: () => ITask[];
//   removeTask: (task: ITask) => ITask;
//   getTasks: () => ITask[];
// }
