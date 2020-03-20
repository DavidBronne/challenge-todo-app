import React, { Component } from "react";
import todosService from "./../lib/todos-service";
import TaskCard from "./../components/TaskCard";
import TaskForm from "./../components/TaskForm";

class Todos extends Component {
  state = { 
    taskList:[]
  };

  componentDidMount() {
    todosService.getAll()
      .then( (taskList) => {
        this.setState( {taskList} )
      })
      .catch((error) => console.log('error', error))
  }

  updateTaskList = () => {
    todosService.getAll()
        .then( (taskList) => {
          this.setState( {taskList} )
        })
        .catch( (err) => console.log(err))

  }

  render() {
    return (
      <div >
        <h1 >Create a Todo</h1>
        <TaskForm onCreation={ this.updateTaskList } />

        <h1 >Task List:</h1>
        {
          this.state.taskList
            .map( (task) => {
              return <TaskCard key={task._id} {...task} /> 
              }
            )
        }
             
      </div>
    );
  }
}

export default (Todos);
