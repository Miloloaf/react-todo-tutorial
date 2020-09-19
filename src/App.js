import React from 'react'
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="container">
      <div className="row">
        <Todoinput />
        <TodoList />
      </div>
    </div>
  )
}

export default App
