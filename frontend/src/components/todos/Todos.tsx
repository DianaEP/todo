import React, { useContext } from "react";
import TodoItem from "../todoItem/TodoItem";
import classes from './Todos.module.css';
import { TodosContext } from '../../store/TodosContext'


const Todos: React.FC = () => {
    const contextTodos = useContext(TodosContext)
    return(
        <ul className={classes.todos}>
            {contextTodos.items.map((item) => (
                <TodoItem key={item.id} task={item.task} onRemove={() => contextTodos.removeTodo(item.id)}/>
            ))}
        </ul>
    )
}

export default Todos;