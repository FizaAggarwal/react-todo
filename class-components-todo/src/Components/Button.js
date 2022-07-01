import React, {Component} from "react";
import { FaChevronDown } from "react-icons/fa";
import './Button.css';

class Button extends Component{
    render(){
            return (
                <>{this.props.count("all")?
            <button className="btn" id={this.props.count("all")===this.props.count("completed")?"dark":"light"}
             onClick={this.props.checkAll}>
      <FaChevronDown/></button>:<button className="btn"/>}</>
      )
        
    }
}

export default Button;
