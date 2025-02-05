import React from "react";
import classes from './TodoItem.module.css';

const TodoItem:  React.FC<{task: string, onRemove: () => void}>= (props) => {

    return(
        <li className={classes.item} onClick={props.onRemove}>{props.task}</li>
    )
}

export default TodoItem;