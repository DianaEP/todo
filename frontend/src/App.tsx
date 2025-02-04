import './App.css'
import NewTodo from './components/newTodo/NewTodo';
import Todos from './components/todos/Todos';
import { TodosContextProvider } from './store/TodosContextProvider';




function App() {
  return (
    <>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </>
  )
}

export default App
