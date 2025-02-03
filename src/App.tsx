import { useState } from 'react';
import './App.css'
import NewTodo from './components/newTodo/NewTodo';
import Todos from './components/todos/Todos';
import Todo from './util/todo';



function App() {
  // const todos = [new Todo('Learn React'),new Todo('Learn TypeScript')]

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

  return (
    <>
      <div>
        <NewTodo onAddTodo={addTodoHandler}/>
        <Todos items={todos} onRemove={removeTodoHandler}/>
      </div>
    </>
  )
}

export default App
