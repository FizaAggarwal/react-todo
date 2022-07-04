import React, {Component} from "react";
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

class Footer extends Component{
    
    render(){
        return(
            <div className="footer">
            <span className="left">{this.props.count("active")} {this.props.count("active")===1?"item":"items"} left</span>
            <span className="buttons">
            <CustomizedButton onClick={()=>this.props.setMode("all")} >All</CustomizedButton>
            <CustomizedButton onClick={()=>this.props.setMode("active")} >Active</CustomizedButton>
            <CustomizedButton onClick={()=>this.props.setMode("completed")} >Completed</CustomizedButton>
            </span>
            {this.props.count("completed")?<ClearButton onClick={this.props.clear}>
                Clear Completed</ClearButton>:null}
             </div>
        )
    }
}

export default Footer;