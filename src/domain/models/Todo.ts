export interface ITask {
  id: number;
  task: string;
  isDone?: boolean;
}

// Use Cases
export interface ITaskOperations {
  addTask: () => ITask[];
  removeTask: (task: ITask) => ITask;
  getTasks: () => ITask[];
}
