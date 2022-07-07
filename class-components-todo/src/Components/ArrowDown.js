import React, {Component} from "react";
import { FaChevronDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton=styled(Button)`
    color: rgba(128,128,128);
`;

class ArrowDown extends Component{
    render(){
            return (
                <>{this.props.count("all")?<CustomButton onClick={this.props.checkAll}><FaChevronDown/></CustomButton>:
                <CustomButton/>}</>
                   )
            }
}

export default ArrowDown;

