import React, { Component } from "react";

class TaskCard extends Component{

    render() {
        return (
            <div>
                <div >
                    <h4 >{ this.props.title }</h4>
                    <p >{ this.props.body }</p>
                </div>
            </div>
        )
    }

} 

export default (TaskCard)