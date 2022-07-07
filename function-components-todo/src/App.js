import './App.css';
import { useState,useCallback, useMemo } from "react";
import uuid from 'react-uuid';
import ArrowDown from "./Components/Button";
import InputContainer from "./Components/Input";
import TodoItem from "./Components/TodoItem";
import Footer from "./Components/Footer";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Top=styled(Box)`
  border: 1px solid grey;
  width:600px;
  height:60px;
  display: flex;
  margin: auto;
`;

function App() {
  //initial state
   const [all,setAll]=useState([]);
   const [newToDo,setNewToDo]=useState("");
   const [mode,setMode]=useState("all");
   const [editToDo,setEditToDo]=useState("");

   //adding todo
   const addTodo=useCallback(()=>{setAll([...all,{id:uuid(),action:newToDo,done:false,isEdit:false}]);
            setNewToDo("");},[all,newToDo]);

   //count of all list
   const All=useMemo(()=>[...all].length,[all]);
          
   //count of completed todos
   const Completed=useMemo(()=>[...all].filter(item=>item.done===true).length,[all]);

   //function for complete all button
   const checkAll=useCallback(()=>{
    const temp=(Completed<All)?[...all].map(item=>item={...item,done:true}):[...all].map(item=>item={...item,done:false});
    setAll(temp)},[Completed,All,all]);

  //giving filtered array
  const listToMap=useMemo(()=> {
  if(mode==="active")
      { return [...all].filter(item=>item.done===false);}
  else if(mode==="completed")
      { return [...all].filter(item=>item.done===true);}
  else
      {return all;}
  },[mode,all]);

  //count of todos left
  const Left=useMemo(()=>[...all].filter(item=>item.done===false).length,[all]);

  //to (un)check a todo
  const toggleDone = useCallback((todo) =>
  setAll([...all].map(item=>item.id===todo.id?{...item,done:!item.done}:item)),[all]);

  //edit todo after pressing enter
  const handleKeyEdit = useCallback((e,id) => {
    if(e.key==='Enter'){
    setAll([...all].map(item=>item.id===id?{...item,action:editToDo,isEdit:false}:item));
    setEditToDo("");}
  },[all,editToDo]);

  //to chnage todo list to edit input
  const edit = useCallback((todo) => {
  setAll([...all].map(item=>item.id===todo.id?{...item,isEdit:!item.isEdit}:item));
  setEditToDo(todo.action);
  },[all]); 

  //to delete todo
  const deleteTodo=useCallback((todo)=>{
  setAll([...all].filter(item=>all.indexOf(item)!==all.indexOf(todo)));},[all]);

  //to change mode
  const changeMode=(mode)=>setMode(mode);

  //to clear the completed todos
  const clear=useCallback(()=>setAll([...all].filter(item=>item.done===false)),[all]);

  return (
    <Box>
     <h1 className="heading">todos</h1>
         <Top>
         <ArrowDown countAll={All} Items={Completed} checkAll={checkAll}/>
         <InputContainer value={newToDo} change={(e)=>setNewToDo(e.target.value)} enter={e=>e.key==='Enter'&& addTodo()}/>
         </Top>
         {listToMap.map((item)=>(
        <TodoItem todo={item} toggle={toggleDone} value={editToDo}
        change={(e)=>setEditToDo(e.target.value)} enter={handleKeyEdit} editInput={edit} delete={deleteTodo}/> ))}
        {All?<Footer Left={Left} Completed={Completed} change={changeMode} clear={clear}/>:null}
    </Box>
  );
         }

export default App;

