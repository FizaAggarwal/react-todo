import React, {Component} from "react";
import { FaChevronDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyButton=styled(Button)`
    color: rgba(128,128,128);
`;

class ArrowDown extends Component{
    render(){
            return (
                <>{this.props.count("all")?<MyButton onClick={this.props.checkAll}><FaChevronDown/></MyButton>:<MyButton/>}</>
                   )
            }
}

export default ArrowDown;
