import {ITodoRepository} from "../ports/TodoRepository";

interface DeleteTodoRequestDTO {
    id: string;
}

// Implementation: Class
class DeleteTodo {
    constructor(private todoRepository: ITodoRepository) {
    }

    invoke(todoDto: DeleteTodoRequestDTO){
        this.todoRepository.removeTodo(todoDto.id);
    }
}

// Implementation: function
const deleteTodoUseCase = (todoRepository: ITodoRepository) => ({
    invoke: (todoDto: DeleteTodoRequestDTO): void => {
        todoRepository.removeTodo(todoDto.id);
    }
})


