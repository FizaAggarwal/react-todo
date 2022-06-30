import React, {Component} from 'react';
import "./input.css";

class Input extends Component{
    render(){
        return(
            <input className='input' placeholder='What needs to be done?'
            value={this.props.value} 
            onChange={this.props.handleChange}
            autoFocus={ true}></input>
        )
        
    }
}

export default Input;
