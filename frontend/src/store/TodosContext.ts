import { createContext } from "react";
import Todo from "../util/todo";

export type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: () => {}
})