import './App.css'
import Todos from './components/Todos';
import Todo from './util/todo';



function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ]

  return (
    <>
      <div>
        <Todos items={todos}/>
      </div>
    </>
  )
}

export default App
