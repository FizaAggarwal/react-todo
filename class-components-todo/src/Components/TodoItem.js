import React, { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component{
    render(){
        return(
            <div key={this.props.todo.id} className="todo">
          
            <input id="toggle" className="toggle" type="checkbox" checked={this.props.todo.done}
             onChange={() => this.props.toggle(this.props.todo)}/>
            <span>{this.props.todo.isEdit?
            <input id={this.props.todo.id} type="text" value={this.props.value}
             onChange={this.props.edit} onKeyPress={this.props.handleEdit} ></input>:
            <span onDoubleClick={()=>this.props.editInput(this.props.todo)} 
            className={this.props.todo.done?"action":"not-action"}>{this.props.todo.action}</span>}
            </span>
            <button onClick={()=>this.props.delete(this.props.todo)}>delete</button>
        </div>
        )
    }
}

export default TodoItem;