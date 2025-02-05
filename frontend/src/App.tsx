import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'
import NewTodo from './components/newTodo/NewTodo';
import Todos from './components/todos/Todos';
import { TodosContextProvider } from './store/TodosContextProvider';


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TodosContextProvider>
          <NewTodo />
          <Todos />
        </TodosContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
