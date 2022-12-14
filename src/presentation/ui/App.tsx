import {ChangeEvent, FC, useEffect, useRef, useState} from "react";
import TasksList from "./components/TasksList";
// import Task from "./components/TaskItem";
import {ITask} from "./Interfaces";
import "./styles.css";
import {TodoService} from "../../adapters/services/todo-service";
import {LocalStorageDataAccessImplementation} from "../../infrastructure/adapters/LocalStorageDataAccessImplementation";
import {
  SessionStorageDataAccessImplementation
} from "../../infrastructure/adapters/SessionStorageDataAccessImplementation";
import {ImMemoryDataAccessImplementation} from "../../infrastructure/adapters/InMemoryDataAccessImplementation";
import {ITodoDtoResponse} from "../../adapters/services/dtos/todoDtoResponse";
import {ITodoOperationSecondary} from "../../domain/ports/secondary/ITodoOperarationsSecondary";

// High Level:
// ui component -> domain service -> impl (use cases) -> 3rd party / other hexegonal system

// Specific to TODO App
// App Component -> Todo Service -> SessionStorageDataAccessImplementation/* -> session storage
// TodoService = Domain Service

// DI:
// ITodoOperationSecondary -> new SessionStorageDataAccessImplementation()

const App: FC = (): JSX.Element => {

  // Test
  // TodoService = Domain Service (in the image DDD)
  // const todoService: TodoService = new TodoService(new SessionStorageDataAccessImplementation())

  // const todoService: TodoService = new TodoService(new LocalStorageDataAccessImplementation())
  const todoService: TodoService = new TodoService(new ImMemoryDataAccessImplementation())


  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<any[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const clearInputs = (): void => {
    setTask("");
    taskInput.current?.focus();
  };

  const addTask = (): void => {
    console.log(task);
    todoService.addTodo({
      // id: new Date().getTime(),
      text: task,
      // isDone: false
    })
    todoService.getAllTodos().then((res: ITodoDtoResponse[])=> console.log(res))
    // const newTask: ITask = {
    //   id: new Date().getTime(),
    //   task,
    //   isDone: false
    // };
    // setTodoList((prevState: ITask[]): ITask[] => [...prevState, newTask]);
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

  const getData = async (): Promise<void> => {
    const todos: ITodoDtoResponse[] = await todoService.getAllTodos();
    setTodoList(todos);
  }

  // useEffect(()=>{
  //   getData()
  // })

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
          {todoList.map((task: any) => (
            // <Task key={task.id} handleRemoveTask={removeTask} {...task} />
            // <div key={task.id}>{task.title}</div>
            <div>aaaaa</div>
          ))}
        </TasksList>
      </section>
    </div>
  );
};

export default App;
