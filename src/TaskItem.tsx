import { FC } from "react";
import { ITask } from "./Interfaces";

interface Props extends ITask {
  handleRemoveTask(taskId: number): void;
}

const Task: FC<Props> = ({ id, task, handleRemoveTask }) => {
  return (
    <li className="taskItem">
      <span>{task}</span>
      <div>
        <button onClick={() => handleRemoveTask(id)}>X</button>
      </div>
    </li>
  );
};

export default Task;
