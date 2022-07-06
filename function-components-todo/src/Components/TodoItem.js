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

function TodoItem(props){
    return(
        <CustomizedBox>
          {props.todo.isEdit?null:<input type="checkbox" checked={props.todo.done}
         onChange={() => props.toggle(props.todo)}/>}
        {props.todo.isEdit?<input className="edit" type="text" value={props.value}
         onChange={props.change} onKeyPress={(e)=>props.enter(e,props.todo.id)} ></input>:
        <span onDoubleClick={()=>props.editInput(props.todo)} 
        id={props.todo.done?"action":"not-action"} className="list">{props.todo.action}</span>}
        {props.todo.isEdit?null:<button className="delete" 
        onClick={()=>props.delete(props.todo)}><CloseIcon/></button>}
    </CustomizedBox>);
}

export default TodoItem;