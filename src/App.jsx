import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodos";
import View from "./components/View";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState(null);
  const newTodoHandler = (event) => {
    setNewTodo({ id: Date.now(), name: event.target.value, done: false });
  };


  const addTodo = () => {
    if(!newTodo) return
    setTodos([...todos, newTodo])
    setNewTodo(null)
  };

  const deleteTodos =(todoId)=> {
    setTodos(todos.filter(({id})) => id !== todoId)
  }

  return (
    <div className="App">
      <AddTodo newTodoHandler={newTodoHandler} addTodo={addTodo} todos={todos} />
      <Todos todos={todos}  deleteTodos={deleteTodos}/>
      <View />
    </div>
  );
}

export default App;

