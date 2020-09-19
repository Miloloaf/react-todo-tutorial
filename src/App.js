import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList'
export class App extends Component {
  state = {
    items: [
      { id: 1, title: 'wake up' },
      { id: 2, title: 'make breakfast' },
    ],
    id: uuidv4(),
    item: '',
    editItem: false,
  }
  handleChange = (e) => {
    console.log('handleChange')
  }
  handleSubmit = (e) => {
    console.log('handleSubmit')
  }
  clearList = () => {
    console.log('clear list')
  }
  handleDelete = (id) => {
    console.log(`handle delete ${id}`)
  }
  handleEdit = (id) => {
    console.log(`handle edit ${id}`)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>

            <Todoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
