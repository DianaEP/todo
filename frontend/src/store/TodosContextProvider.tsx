import React, { ReactNode, useState } from "react";
import Todo from '../util/todo'
import { TodoContextObj, TodosContext } from "./TodosContext";



interface TodosContextProviderProps {
    children: ReactNode; //ReactNode that represents anything that can be rendered inside a React component.
}



export const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {
    const[todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) =>{
        const newTodo = new Todo(todoText);
        setTodos((prev) => {
        return [...prev, newTodo]
        })
    }

    const removeTodoHandler = (id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const contextValue: TodoContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }
    return(
        <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
    )
}
