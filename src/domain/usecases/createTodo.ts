// import {ITodoRepository} from "../ports/";
//
// interface CreateTodoRequestDTO {
//     text: string;
// }
//
// function generateTodoId() {
//     return Math.random();
// }
//
//
// // Implementation: Class
// class CreateTodo {
//     constructor(private todoRepository: ITodoRepository) {
//     }
//
//     invoke(todoDto: CreateTodoRequestDTO){
//         this.todoRepository.addTodo({
//             id: generateTodoId(),
//             text: todoDto.text
//         })
//     }
// }
//
// // Implementation: function
// const createTodoUseCase = (todoRepository: ITodoRepository) => ({
//     invoke: (todoDto: CreateTodoRequestDTO) => {
//         todoRepository.addTodo({
//             id: generateTodoId(),
//             text: todoDto.text
//         })
//     }
// })
//
//

export const x = 2;