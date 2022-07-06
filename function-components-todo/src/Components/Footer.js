import './Footer.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomizedButton= styled(Button)`
    color: #404040;
    height:25px;
    margin:auto 0px;
    :focus{
        border:1px solid grey;
        border-radius: 3px;
    }
    `;

    const ClearButton = styled(Button)`
    color: #404040;
    height:30px;
    margin:auto 2px auto auto;
    :hover{
    text-decoration: underline;}
    `;

function Footer(props){
            return (
            <div className="footer">
            <span className="left">{props.Left} {props.Left===1?"item":"items"} left</span>
            <span className="buttons">
            <CustomizedButton onClick={()=>props.change("all")} >All</CustomizedButton>
            <CustomizedButton onClick={()=>props.change("active")} >Active</CustomizedButton>
            <CustomizedButton onClick={()=>props.change("completed")} >Completed</CustomizedButton>
            </span>
            {props.Completed?<ClearButton onClick={props.clear}>
                Clear Completed</ClearButton>:null}
             </div>);
    }

export default Footer;