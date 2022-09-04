import { FC, ChangeEvent, useState, useRef } from "react";
import TasksList from "./components/TasksList";
import Task from "./components/TaskItem";
import { ITask } from "./Interfaces";
import "./styles.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const clearInputs = (): void => {
    setTask("");
    taskInput.current?.focus();
  };

  const addTask = (): void => {
    const newTask: ITask = {
      id: new Date().getTime(),
      task,
      isDone: false
    };
    setTodoList((prevState: ITask[]): ITask[] => [...prevState, newTask]);
    clearInputs();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
      return;
    }
  };

  const removeTask = (taskId: number): void => {
    setTodoList(todoList.filter((item) => item.id !== taskId));
  };

  return (
    <div className="App">
      <header>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            onChange={handleChange}
            value={task}
            ref={taskInput}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </header>
      <section>
        <TasksList>
          {todoList.map((task: ITask) => (
            <Task key={task.id} handleRemoveTask={removeTask} {...task} />
          ))}
        </TasksList>
      </section>
    </div>
  );
};

export default App;
