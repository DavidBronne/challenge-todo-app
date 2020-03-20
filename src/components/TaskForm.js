import React , {Component} from "react";
import todosService from "./../lib/todos-service";

class TaskForm extends Component {
    state = { 
        title: "",
        body: "",
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
       
        const { title, body } = this.state;
        todosService.createTodo ({ title, body })
            .then( (todo) => {  
                this.setState( {title:"" , body:""});
                this.props.onCreation()
            })

          .catch( (err) => console.log(err))
      };
    
      handleChange = event => {
        
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render () {
        const { title, body } = this.state;
        return (
            <div>
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
        )
    }
}

export default (TaskForm)