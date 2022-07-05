import { FaChevronDown } from "react-icons/fa";
import './Button.css';

function Button(props){
    return(
        <>{props.count()?
        <button className="btn" id={props.count()===props.count("completed")?"dark":"light"}
         onClick={props.checkAll}>
  <FaChevronDown/></button>:<button className="btn"/>}</>
    );
}

export default Button;