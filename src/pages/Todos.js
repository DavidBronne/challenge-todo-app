import React, { Component } from "react";
import todosService from "./../lib/todos-service";

class Todos extends Component {
  state = { 
    title: "",
    body: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;

    todosService.createTodo ({ title, body })
      .then( (createdTodo) => console.log('createdTodo', createdTodo))
      .catch( (err) => console.log(err))
  };

  handleChange = event => {
    let { name, value } = event.target;
    
    
    this.setState({ [name]: value });
}

  render() {
    const { title, body } = this.state;
    return (
      <div >
        <h1 >Create a Todo</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label >Title:</label>
          <input 
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          <label >Body:</label>
          <input 
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          />

          <input type="submit" value="Create" />
          
        </form>

        
             
      </div>
    );
  }
}

export default (Todos);
