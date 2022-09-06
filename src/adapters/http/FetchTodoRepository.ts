// Implementation: class
import {ITodo} from "../../domain/models/Todo";

// Note: instead of call directly to Axios 3rd party, we can create an AxiosHttpService
/*class FetchTodoRepository implements ITodoRepository {
    addTodo(todo: ITodo): void {
        fetch('./todo', {method: "post", body: JSON.stringify(todo)}).then(r => r);
    }

    getAllTodos(): Promise<ITodo[]> {
        return fetch('/todo').then((response) => response.json());
    }

    removeTodo(id: string): void {
        fetch(`/todo/${id}`, {method: "delete", body: id}).then(r => r);
    }
}*/

// Implementation: function
/*const FetchTodoRepositoryFunc = (): ITodoRepository => ({
    getAllTodos: (): Promise<ITodo[]> => {
        return fetch('/todo').then((response) => response.json());
    },
    addTodo: (todo: ITodo)=> {
        fetch('./todo', {method: "post", body: JSON.stringify(todo)}).then(r => r);
    },
    removeTodo: (id: string) =>{
        fetch(`/todo/${id}`, {method: "delete", body: id}).then(r => r);
    }
})*/