import React, { Component } from "react";
import './App.css';
import uuid from 'react-uuid';
import { FaChevronDown } from "react-icons/fa";
import  Button  from "@mui/material/Button";

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

  handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.key==='Enter') {
    this.newTodo();
    this.setState({newToDo:""});
  }
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



listToMap=()=> {
  if(this.state.mode==="active")
  {
    return this.state.all.filter(item=>item.done===false);
  }
  else if(this.state.mode==="completed"){
    return this.state.all.filter(item=>item.done===true);
  }
  else{
    return this.state.all;
  }
  }


edit = (todo) => {
  this.setState({
    all: this.state.all.map((item) =>
      item.action === todo.action ? { ...item, isEdit: !item.isEdit } : item
    ),
    editToDo: todo.action
  });
}
  

  btnClick = () =>{
    if(this.countCompleted()<this.count()){
  this.setState({ all : this.state.all.map((item) =>
  item = { ...item, done: true })})
  }
  else{
    this.setState({ all : this.state.all.map((item) =>
      item = { ...item, done: false })})
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

count=()=> this.state.all.length;
countCompleted=()=>this.state.all.filter(item=>item.done===true).length;
countActive=()=>this.state.all.filter(item=>item.done===false).length;
 
  render(){
    return(
        <div className="todoapp">
          <h1 className="heading">todos</h1>
          <div className="main">
         <div className="top"><span className="dropbtn">
    {this.count()?<button className="btn" onClick={this.btnClick}><FaChevronDown/></button>:<button className="btn"/>}
          </span>
          <input className="input" placeholder="What needs to be done?" value={this.state.newToDo} 
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}></input></div>
         <div>{this.listToMap().map((item)=>(
        <div key={item.id}>
          
            <input id="toggle"
            className="toggle" type="checkbox" checked={item.done} onChange={() => this.toggleDone(item)}/>
            <span>{item.isEdit?<input placeholder="tester" id={item.id} type="text" value={this.state.editToDo} onChange={this.handleEdit} onKeyPress={this.handleKeyEdit} ></input>:
            <span onDoubleClick={()=>this.edit(item)} className={item.done?"action":"not-action"}>{item.action}</span>}</span>
            <button onClick={()=>this.delete(item)}>delete</button>
        </div>
      ))}</div>
          <div className="footer">
            <span>{this.countActive()} {this.countActive()===1?"item":"items"} left</span>
            <span><button onClick={this.showAll}>All</button></span>
            <span><button onClick={this.active}>Active</button></span>
            <span><button onClick={this.completed}>Completed</button></span>
            <span><button onClick={this.clear}>Clear Completed</button></span>
            <Button>This is a button</Button>
          </div>
          </div>
        </div>
    )
  }
}


export default App;
