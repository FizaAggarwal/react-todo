import './App.css';
import { useState } from "react";
import uuid from 'react-uuid';
import Button from "./Components/Button";
import Input from "./Components/Input";
import TodoItem from "./Components/TodoItem";
import Footer from "./Components/Footer";

function App() {
  //initial state
   const [all,setAll]=useState([]);
   const [newToDo,setNewToDo]=useState("");
   const [mode,setMode]=useState("all");
   const [editToDo,setEditToDo]=useState("");

   //adding todo after pressing enter
   const addTodo=(e)=>{
          if(e.key==='Enter'){
            setAll(ps => [...ps,{id:uuid(),action:newToDo,done:false,isEdit:false}]);
            setNewToDo("");
          }
   };

   //Getting count of filtered array
  const count=(mode)=>{
  switch(mode){
    case "completed":
      return all.filter(item=>item.done===true).length;
    case "active":
      return all.filter(item=>item.done===false).length;
    default:
      return all.length;
  }
};

  //function for complete all button
  const checkAll = () =>{
    if(count("completed")<count()){
      setAll(all.map(item=>item={...item,done:true}));
  }
  else{
      setAll(all.map(item=>item={...item,done:false}));
  }
};

//giving filtered array
const listToMap=()=> {
  if(mode==="active")
  {
    return all.filter(item=>item.done===false);
  }
  else if(mode==="completed"){
    return all.filter(item=>item.done===true);
  }
  else{
    return all;
  }
  };

  const toggleDone = (todo) =>
  setAll(all.map(item=>item.id===todo.id?{...item,done:!item.done}:item));

  const handleKeyEdit = (id,e) => {
    //it triggers by pressing the enter key
  if (e.key==='Enter') {
    setAll(all.map(item=>item.id===id?{...item,action:editToDo,isEdit:false}:item));
    setEditToDo("");
  }
};

const edit = (todo) => {
  setAll(all.map(item=>item.id===todo.id?{...item,isEdit:!item.isEdit}:item));
  setEditToDo(todo.action);
}

const deleteTodo=(todo)=>{
  setAll(all.filter(item=>all.indexOf(item)!==all.indexOf(todo)));
}

const changeMode=(mode)=>{
  setMode(mode);
}

const clear=()=>{
  setAll(all.filter(item=>item.done===false));
}

  return (
    <>
     <h1 className="heading">todos</h1>
     <div className="main">
         <div className="top">
         <Button count={count} checkAll={checkAll}/>
         <Input value={newToDo} change={(e)=>setNewToDo(e.target.value)} enter={addTodo}/>
         </div>
         {listToMap().map((item)=>(
        <TodoItem todo={item} toggle={toggleDone} value={editToDo}
        change={(e)=>setEditToDo(e.target.value)} enter={handleKeyEdit} editInput={edit} delete={deleteTodo}/> ))}
        {count()?<Footer count={count} change={changeMode} clear={clear}/>:null}
         </div>
    </>
  );
}

export default App;
