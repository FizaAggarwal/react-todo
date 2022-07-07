import React, { Component } from "react";
import './App.css';
import uuid from 'react-uuid';
import TodoItem from './Components/TodoItem';
import InputContainer from "./Components/Input";
import Footer from "./Components/Footer";
import ArrowDown from "./Components/ArrowDown";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Top=styled(Box)`
  border: 1px solid grey;
  width:600px;
  height:60px;
  display: flex;
  margin: auto;
`;

class App extends Component{
  constructor(props) {
    super(props);

    // InitialState
    this.state = {
      all: [],
  newToDo:"",
  mode:"all",
  editToDo:""
    };
  }
  
  //OnChange for newTodo Input
  handleChange=(event)=>{
    this.setState({newToDo:event.target.value});
  };

  //NewTodo After pressing enter
  handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.key==='Enter') {
    this.newTodo();
    this.setState({newToDo:""});
  }
};

  //Adding NewTodo to the state
  newTodo=()=>{
    this.setState({
      all:[
        ...this.state.all,
        {id:uuid(),action:this.state.newToDo,done:false,isEdit:false}
      ]});
  };

  //Checkbox for todo
  toggleDone = (todo) =>
  this.setState({
    all: this.state.all.map((item) =>
      item.id === todo.id ? { ...item, done: !item.done } : item
    ),
  });

  //deleting todo
  delete=(todo)=>{
    this.setState({ all: this.state.all.filter((item) => this.state.all.indexOf(item) !== this.state.all.indexOf(todo)) });
  }

  //Changing isEdit state of todo
  edit = (todo) => {
    this.setState({
      all: this.state.all.map((item) =>
        item.id=== todo.id ? { ...item, isEdit: !item.isEdit } : item
      ),
      editToDo: todo.action
    });
  }

  //Onchange for edit input
  handleEdit= e =>{
    this.setState({editToDo : e.target.value});
  };

  //Edit Todo after pressing Enter
  handleKeyEdit = e => {
    //it triggers by pressing the enter key
  if (e.key==='Enter') {
    this.editTodo(e.target.id);
    this.setState({editToDo:""});
  }
};

  //Changing Edit Todo in state
  editTodo=(id)=>{
    this.setState({
      all: this.state.all.map((item) =>
        item.id === id ? { ...item, action:this.state.editToDo ,isEdit:false} : item
      )
    });
  }

//Getting filtered array
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

 //Button to (un)check all todos
 checkAll = () =>{
    if(this.count("completed")<this.count()){
  this.setState({ all : this.state.all.map((item) =>
  item = { ...item, done: true })})
  }
  else{
    this.setState({ all : this.state.all.map((item) =>
      item = { ...item, done: false })})
  }
}

//Changing mode in the state
setMode=(mode)=>{
     this.setState({mode:mode});
}

//Clearing completed todos
clear=()=>{
  this.setState({all:this.state.all.filter(item=>item.done===false)});
}

//Getting count of filtered array
count=(mode)=>{
    switch(mode){
      case "completed":
        return this.state.all.filter(item=>item.done===true).length;
      case "active":
        return this.state.all.filter(item=>item.done===false).length;
      default:
        return this.state.all.length;
    }
}
 
  render(){
    return(
        <>
          <h1 className="heading">todos</h1>
          <Top>
          <ArrowDown count={this.count} checkAll={this.checkAll}/>
          <InputContainer value={this.state.newToDo} click={this.handleChange} enter={this.handleKeypress}/>
          </Top>
         {this.listToMap().map((item)=>(
        <TodoItem todo={item} toggle={this.toggleDone} value={this.state.editToDo}
        edit={this.handleEdit} handleEdit={this.handleKeyEdit} editInput={this.edit} delete={this.delete}/> ))}
        {this.count("all")?<Footer count={this.count} setMode={this.setMode} clear={this.clear}/>:null}
        </>
    )
  }
}


export default App;
