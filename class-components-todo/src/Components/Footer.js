import React, {Component} from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const MyBox=styled(Box)`
width:600px;
height:60px;
margin: 0px auto;
border:1px solid grey;
box-shadow: 0px 4px rgba(128, 128, 128, 0.3),0px 8px rgba(128, 128, 128, 0.3);
display:flex;
`;

const Items=styled(Box)`
margin: auto 0px auto 16px;
color: #404040;
`;

const Buttons=styled(Box)`
    display: flex;
    margin-left: 30px;
`;

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
            <MyBox>
            <Items>{this.props.count("active")} {this.props.count("active")===1?"item":"items"} left</Items>
            <Buttons>
            <CustomizedButton onClick={()=>this.props.setMode("all")} >All</CustomizedButton>
            <CustomizedButton onClick={()=>this.props.setMode("active")} >Active</CustomizedButton>
            <CustomizedButton onClick={()=>this.props.setMode("completed")} >Completed</CustomizedButton>
            </Buttons>
            {this.props.count("completed")?<ClearButton onClick={this.props.clear}>
                Clear Completed</ClearButton>:null}
             </MyBox>
        )
    }
}

export default Footer;