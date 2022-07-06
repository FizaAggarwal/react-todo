import { FaChevronDown } from "react-icons/fa";
import './Button.css';

function Button(props){
    return(
        <>{props.countAll?
        <button className="btn" id={props.countAll===props.Items?"dark":"light"}
         onClick={props.checkAll}>
  <FaChevronDown/></button>:<button className="btn"/>}</>
    );
}

export default Button;