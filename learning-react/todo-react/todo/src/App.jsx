import { useState } from 'react'
import './App.css'
import CustomButton from './ui-components/CustomButton'

function App() {
  const [todos, setTodos] = useState([{
    title: "New Todo 1",
    description: "Desc of new todo 1"
  }, {
    title: "New Todo 2",
    description: "Desc of new todo 2"
  }])


  function addTodos() {
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodos}>Add Todo</button>
      {todos.map(function(todos) {
        return <Todo title={todos.title} description={todos.description}/>
      })}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
  <h2>{props.description}</h2>
  </div>
}



export default App
