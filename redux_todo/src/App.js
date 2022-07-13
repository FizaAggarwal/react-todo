import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ArrowDown from "./Components/ArrowDown";
import InputContainer from "./Components/InputContainer";
import TodoItem from "./Components/TodoItem";
import Footer from "./Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState } from "react";
import {
  addTodo,
  checkAll,
  toggleDone,
  edit,
  replace,
  deleteTodo,
  clickAll,
  clickActive,
  clickCompleted,
  clear,
} from "./actions/index";

const Heading = styled(Box)`
  font-size: 100px;
  font-weight: 500;
  text-align: center;
  margin: 5px;
  color: rgba(175, 47, 47, 0.25);
`;

const Top = styled(Box)`
  border: 1px solid grey;
  width: 600px;
  height: 60px;
  display: flex;
  margin: auto;
`;

function App() {
  //get all from state
  const all = useSelector((state) => state.todoReducers.all);

  //get mode from state
  const mode = useSelector((state) => state.todoReducers.mode);

  //initial state for inputs
  const [newToDo, setNewToDo] = useState("");
  const [editToDo, setEditToDo] = useState("");

  //to dispatch action
  const dispatch = useDispatch();

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

  //count of all list
  const list = useMemo(() => all.length, [all]);

  //count of completed todos
  const completed = useMemo(
    () => all.filter((item) => item.done === true).length,
    [all]
  );

  //count of todos left
  const left = useMemo(
    () => all.filter((item) => item.done === false).length,
    [all]
  );

  return (
    <Box>
      <Heading>todos</Heading>
      <Top>
        <ArrowDown
          countAll={list}
          checkAll={() => dispatch(checkAll(completed, list))}
        />
        <InputContainer
          value={newToDo}
          change={(e) => setNewToDo(e.target.value)}
          enter={(e) => {
            if (e.key === "Enter") {
              return dispatch(addTodo(newToDo)), setNewToDo("");
            }
          }}
        />
      </Top>
      {listToMap.map((item) => (
        <TodoItem
          todo={item}
          toggle={() => dispatch(toggleDone(item.id))}
          editInput={() => {
            dispatch(replace(item.id));
            setEditToDo(item.action);
          }}
          value={editToDo}
          change={(e) => setEditToDo(e.target.value)}
          enter={(e) => {
            if (e.key === "Enter") {
              return dispatch(edit(item.id, editToDo)), setEditToDo("");
            }
          }}
          delete={() => dispatch(deleteTodo(item.id))}
        />
      ))}
      {list > 0 && (
        <Footer
          left={left}
          completed={completed}
          all={() => dispatch(clickAll())}
          active={() => dispatch(clickActive())}
          clickcompleted={() => dispatch(clickCompleted())}
          clear={() => dispatch(clear())}
        />
      )}
    </Box>
  );
}

export default App;
