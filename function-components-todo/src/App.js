import { useState, useCallback, useMemo } from "react";
import uuid from "react-uuid";
import ArrowDown from "./Components/Button";
import InputContainer from "./Components/Input";
import TodoItem from "./Components/TodoItem";
import Footer from "./Components/Footer";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Top = styled(Box)`
  border: 1px solid grey;
  width: 600px;
  height: 60px;
  display: flex;
  margin: auto;
`;

const Heading = styled(Box)`
  font-size: 100px;
  font-weight: 500;
  text-align: center;
  margin: 5px;
  color: rgba(175, 47, 47, 0.25);
`;

function App() {
  //initial state
  const [all, setAll] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [mode, setMode] = useState("all");
  const [editToDo, setEditToDo] = useState("");

  //adding todo
  const addTodo = useCallback(() => {
    const newtodo = [
      ...all,
      { id: uuid(), action: newToDo, done: false, isEdit: false },
    ];
    setAll(newtodo);
    setNewToDo("");
  }, [all, newToDo, setNewToDo]);

  //count of all list
  const list = useMemo(() => [...all].length, [all]);

  //count of completed todos
  const completed = useMemo(
    () => [...all].filter((item) => item.done === true).length,
    [all]
  );

  //function for complete all button
  const checkAll = useCallback(() => {
    const temp =
      completed < list
        ? [...all].map((item) => (item = { ...item, done: true }))
        : [...all].map((item) => (item = { ...item, done: false }));
    setAll(temp);
  }, [completed, list, all]);

  //giving filtered array
  const listToMap = useMemo(() => {
    if (mode === "active") {
      return [...all].filter((item) => item.done === false);
    } else if (mode === "completed") {
      return [...all].filter((item) => item.done === true);
    } else {
      return all;
    }
  }, [mode, all]);

  //count of todos left
  const left = useMemo(
    () => [...all].filter((item) => item.done === false).length,
    [all]
  );

  //to (un)check a todo
  const toggleDone = useCallback(
    (todo) => {
      const toggle = [...all].map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      );
      setAll(toggle);
    },
    [all]
  );

  //edit todo after pressing enter
  const handleKeyEdit = useCallback(
    (e, id) => {
      if (e.key === "Enter") {
        const edittodo = [...all].map((item) =>
          item.id === id ? { ...item, action: editToDo, isEdit: false } : item
        );
        setAll(edittodo);
        setEditToDo("");
      }
    },
    [all, editToDo]
  );

  //to change todo list to edit input
  const edit = useCallback(
    (todo) => {
      const isedit = [...all].map((item) =>
        item.id === todo.id ? { ...item, isEdit: !item.isEdit } : item
      );
      setAll(isedit);
      setEditToDo(todo.action);
    },
    [all, setEditToDo]
  );

  //to delete todo
  const deleteTodo = useCallback(
    (todo) => {
      const filter = [...all].filter(
        (item) => all.indexOf(item) !== all.indexOf(todo)
      );
      setAll(filter);
    },
    [all]
  );

  //to change mode
  const changeMode = (mode) => setMode(mode);

  //to clear the completed todos
  const clear = useCallback(() => {
    const filterarray = [...all].filter((item) => item.done === false);
    setAll(filterarray);
  }, [all]);

  return (
    <Box>
      <Heading>todos</Heading>
      <Top>
        <ArrowDown countAll={list} checkAll={checkAll} />
        <InputContainer
          value={newToDo}
          change={(e) => setNewToDo(e.target.value)}
          enter={(e) => e.key === "Enter" && addTodo()}
        />
      </Top>
      {listToMap.map((item) => (
        <TodoItem
          todo={item}
          toggle={toggleDone}
          value={editToDo}
          change={(e) => setEditToDo(e.target.value)}
          enter={handleKeyEdit}
          editInput={edit}
          delete={deleteTodo}
        />
      ))}
      {list > 0 && (
        <Footer
          left={left}
          completed={completed}
          change={changeMode}
          clear={clear}
        />
      )}
    </Box>
  );
}

export default App;
