import React, {Component} from 'react';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';

const MyInput=styled(Input)`
    font-size:25px;
    width:550px;
`;

class InputContainer extends Component{
    render(){
        return(
             
          <MyInput placeholder="What needs to be done?" disableUnderline={true} value={this.props.value} onChange={this.props.click}
          onKeyPress={this.props.enter}></MyInput>
        )
    }
}

export default InputContainer;
