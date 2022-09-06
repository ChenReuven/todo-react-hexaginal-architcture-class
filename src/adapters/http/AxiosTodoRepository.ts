// Implementation: class
import axios from "axios";
import {ITodo} from "../../domain/models/Todo";
import {ITodoOperationSecondary} from "../../domain/ports/secondary/ITodoOperarationsSecondary";

// Note: instead of call directly to Axios 3rd party, we can create an AxiosHttpService
/*class AxiosTodoRepository implements ITodoOperationSecondary {
    addTodo(todo: ITodo): void {
        axios.post('./todo', todo).then(r => r);
    }

    getAllTodos(): Promise<ITodo[]> {
        return axios.get('/todo');
    }

    removeTodo(id: string): void {
        axios.delete(`/todo/${id}`).then(r => r)
    }
}*/

// Implementation: function
/*const AxiosTodoRepositoryFunc = (): ITodoRepository => ({
    getAllTodos: (): Promise<ITodo[]> => {
        return axios.get('/todo');
    },
    addTodo: (todo: ITodo)=> {
        axios.post('./todo', todo).then(r => r);
    },
    removeTodo: (id: string) => {
        axios.delete(`/todo/${id}`).then(r=>r);
    }
})*/