import React, { Component } from "react";
import './TodoItem.css';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CustomizedBox= styled(Box)`
    display: flex;
    border: 1px solid grey;
    min-height:60px;
    width:600px;
    align-self: center;
    height:auto;

    :hover{
        .delete{
            display:initial;
        }
    }
`;

class TodoItem extends Component{
    
    render(){
        return(
            <CustomizedBox key={this.props.todo.id}>
          
            {this.props.todo.isEdit?null:<input type="checkbox" checked={this.props.todo.done}
             onChange={() => this.props.toggle(this.props.todo)}/>}
            {this.props.todo.isEdit?
            <input className="edit" id={this.props.todo.id} type="text" value={this.props.value}
             onChange={this.props.edit} onKeyPress={this.props.handleEdit} ></input>:
            <span onDoubleClick={()=>this.props.editInput(this.props.todo)} 
            id={this.props.todo.done?"action":"not-action"} className="list">{this.props.todo.action}</span>}
            {this.props.todo.isEdit?null:<button className="delete" 
            onClick={()=>this.props.delete(this.props.todo)}><CloseIcon/></button>}
        </CustomizedBox>
        )
    }
}

export default TodoItem;