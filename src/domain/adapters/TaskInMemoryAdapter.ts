import { ITask, ITaskOperations } from "../models/Todo";

class InMemoryTaskAdapter implements ITaskOperations {
  constructor(inMemoryTaskService: ITaskOperations) {}

  addTask(): ITask[] {
    return this.taskService.addTask();
  }
  removeTask: (task: ITask) => ITask;
  getTasks: () => ITask[];
}
