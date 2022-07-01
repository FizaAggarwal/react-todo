import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
    render(){
        return(
             
          <input className="input" placeholder="What needs to be done?" value={this.props.value} 
          onChange={this.props.click}
          onKeyPress={this.props.enter}></input>
        )
    }
}

export default Input;
