import { v4 as uuidv4 } from 'uuid';

class Todo {
    id: string;
    task: string;
    completed: boolean;

    constructor(todoText: string, completed: boolean = false){
        this.task = todoText;
        this.completed = completed;
        this.id = uuidv4();

    }
}

export default Todo;