import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList'
export class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false,
  }
  handleChange = (e) => {

    this.setState({
      item: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    }
    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false,
    })
  }
  clearList = () => {
    this.setState({
      items:[]
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find(item=> item.id === id);
    this.setState ({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })

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
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
