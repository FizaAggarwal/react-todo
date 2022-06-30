import React, { Component } from "react";
import './App.css';
import uuid from 'react-uuid';
import { FaChevronDown } from "react-icons/fa";

class App extends Component{
  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      all: [],
  newToDo:"",
  mode:"all",
  editToDo:"",
  editToDoId:""
    };
  }

  handleChange=(event)=>{
    this.setState({newToDo:event.target.value});
  };

  newTodo=()=>{
    this.setState({
      all:[
        ...this.state.all,
        {id:uuid(),action:this.state.newToDo,done:false,isEdit:false}
      ]});
  };


  toggleDone = (todo) =>
  this.setState({
    all: this.state.all.map((item) =>
      item.action === todo.action ? { ...item, done: !item.done } : item
    ),
  });

  delete=(todo)=>{
    this.setState({ all: this.state.all.filter((item) => this.state.all.indexOf(item) !== this.state.all.indexOf(todo)) });
  }

  handleEdit= e =>{
    this.setState({editToDo : e.target.value,editToDoId:e.target.id});
  };

  editTodo=()=>{
    this.setState({
      all: this.state.all.map((item) =>
        item.id === this.state.editToDoId ? { ...item, action:this.state.editToDo ,isEdit:false} : item
      )
    });
  }


  handleKeyEdit = e => {
    //it triggers by pressing the enter key
  if (e.key==='Enter') {
    this.editTodo();
    this.setState({editToDo:"",editToDoId:""});
  }
};

editInput=(item)=>{
  if(item.isEdit===false){
    return <span onDoubleClick={()=>this.edit(item)} className="action">{item.action}</span>}
    else{
      return <input placeholder="tester" id={item.id} type="text" value={item.action} onChange={this.handleEdit} onKeyPress={this.handleKeyEdit} ></input>
    }
}


  todoRows=()=>{

    if(this.state.mode==="active"){
      return  this.state.all.filter(item=>item.done===false).map((item)=>(
        <div key={item.id}>
          
            <input id="toggle"
            className="toggle" type="checkbox" checked={item.done} onChange={() => this.toggleDone(item)}/>
            <span>{this.editInput(item)}</span>
            <button onClick={()=>this.delete(item)}>delete</button>
        </div>
      ))}

    else if(this.state.mode=== "completed"){
     return this.state.all.filter(item=>item.done===true).map((item)=>(
        <div key={item.id}>
          
            <input id="toggle"
            className="toggle" type="checkbox" checked={item.done} onChange={() => this.toggleDone(item)}/>
            <span>{this.editInput(item)}</span>
           <button onClick={()=>this.delete(item)}>delete</button>
        </div>
      ))}

    else{
   return this.state.all.map((item)=>(
      <div key={item.id} className="todo">
        
          <input id="toggle"
          className="toggle" type="checkbox" checked={item.done} onChange={() => this.toggleDone(item)}/>
          <span>{this.editInput(item)}</span>
          <button onClick={()=>this.delete(item)}>delete</button>
      </div>
    ))}
}

edit = (todo) => {
  this.setState({
    all: this.state.all.map((item) =>
      item.action === todo.action ? { ...item, isEdit: !item.isEdit } : item
    ),
  });
}
  
    
     handleKeypress = e => {
      //it triggers by pressing the enter key
    if (e.key==='Enter') {
      this.newTodo();
      this.setState({newToDo:""});
    }
  };

  btnClick = () =>{
    const arr1=this.state.all.filter(item=>{return item.done===true});
    if(arr1.length<this.state.all.length){
  this.setState({ all : this.state.all.map((item) =>
  item = { ...item, done: true }
),
}
  )}
  else{
    this.setState({ all : this.state.all.map((item) =>
      item = { ...item, done: false }
    ),
    }
      )
  }
}

active=()=>{
  this.setState({mode:"active"});
}

showAll=()=>{
  this.setState({mode:"all"});
}

completed=()=>{
 this.setState({mode:"completed"});
}


clear=()=>{
  this.setState({all:this.state.all.filter(item=>item.done===false)});
}

btn=()=>{
  if(this.state.all.length!==0){
    return  <button className="btn" onClick={this.btnClick}><FaChevronDown/></button>
  }
  else{
    return <button className="btn" onClick={this.btnClick}></button>
  }
}

  
  render(){
    return(
        <div className="todoapp">
          <h1 className="heading">todos</h1>
          <div className="main">
         <div className="top"><span className="dropbtn">{this.btn()}</span>
          <input className="input" placeholder="What needs to be done?" value={this.state.newToDo} 
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}></input></div>
          <div>{this.todoRows()}</div>
          <div className="footer">
            <span>{this.state.all.filter(item=>item.done===false).length} {this.state.all.filter(item=>item.done===false).length===1?"item":"items"} left</span>
            <span><button onClick={this.showAll}>All</button></span>
            <span><button onClick={this.active}>Active</button></span>
            <span><button onClick={this.completed}>Completed</button></span>
            <span><button onClick={this.clear}>Clear Completed</button></span>
          </div>
          </div>
        </div>
    )
  }
}


export default App;
