export interface ITodoDtoResponse {
  id: string;
  text: string;
  isComplete?: boolean;
}

// OR

// export type ITodoDtoResponse = {
//   text: string
// }

// OR

// export class TodoDtoResponse {
//   constructor(private text: string) {
//   }
// }