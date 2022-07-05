import './Input.css';

function Input(props){
    return(
    <input className="input" placeholder="What needs to be done?" value={props.value} 
    onChange={props.change}
    onKeyPress={props.enter}></input>
    );
}

export default Input;