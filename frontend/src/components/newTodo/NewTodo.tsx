import React, { useContext, useRef } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../../store/TodosContext";

const NewTodo : React.FC = () => {
    const contextTodos = useContext(TodosContext);
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoInputRef.current!.value // try get me a value or if is null store null .?, or i'm certain that here will be a value .!
        if(enteredText.trim().length === 0){
            // throw error
            return;
        }
        contextTodos.addTodo(enteredText);
    }
    return(
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo