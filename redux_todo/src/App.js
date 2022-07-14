import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ArrowDown from "./Components/ArrowDown";
import InputContainer from "./Components/InputContainer";
import TodoItem from "./Components/TodoItem";
import Footer from "./Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";
import {
  addTodo,
  checkAll,
  toggleDone,
  edit,
  replace,
  deleteTodo,
  clear,
  newTodo,
  editTodo,
  clickFilter,
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
  //get state from redux
  const all = useSelector((state) => state.todoReducers.all);
  const mode = useSelector((state) => state.todoReducers.mode);
  const newToDo = useSelector((state) => state.todoReducers.newToDo);
  const editToDo = useSelector((state) => state.todoReducers.editToDo);

  //to dispatch action
  const dispatch = useDispatch();

  //giving filtered array
  const listToMap = useMemo(() => {
    switch (mode) {
      case "active":
        return [...all].filter((item) => item.done === false);
      case "completed":
        return [...all].filter((item) => item.done === true);
      default:
        return all;
    }
  }, [mode, all]);

  //giving count of array according to mode
  const count = useCallback(
    (mode) => {
      switch (mode) {
        case "active":
          return [...all].filter((item) => item.done === false).length;
        case "completed":
          return [...all].filter((item) => item.done === true).length;
        default:
          return all.length;
      }
    },
    [all]
  );

  //for adding todo
  const addItem = useCallback(
    (newToDo) => dispatch(addTodo(newToDo)),
    [dispatch]
  );

  //for edit input
  const editItem = useCallback(
    (id, editToDo) => dispatch(edit(id, editToDo)),
    [dispatch]
  );

  //to replace todo
  const replaceItem = useCallback(
    (id, action) => dispatch(replace(id, action)),
    [dispatch]
  );

  //to complete all todos
  const clickAll = useCallback(
    () => dispatch(checkAll(count("completed"), count("all"))),
    [dispatch, count]
  );

  return (
    <Box>
      <Heading>todos</Heading>
      <Top>
        <ArrowDown countAll={count("all")} checkAll={clickAll} />
        <InputContainer
          value={newToDo}
          change={(e) => dispatch(newTodo(e.target.value))}
          enter={(e) => e.key === "Enter" && addItem(newToDo)}
        />
      </Top>
      {listToMap.map((item) => (
        <TodoItem
          todo={item}
          toggle={() => dispatch(toggleDone(item.id))}
          editInput={() => replaceItem(item.id, item.action)}
          value={editToDo}
          change={(e) => dispatch(editTodo(e.target.value))}
          enter={(e) => e.key === "Enter" && editItem(item.id, editToDo)}
          delete={() => dispatch(deleteTodo(item.id))}
        />
      ))}
      {count("all") > 0 && (
        <Footer
          left={count("active")}
          completed={count("completed")}
          click={(mode) => dispatch(clickFilter(mode))}
          clear={() => dispatch(clear())}
        />
      )}
    </Box>
  );
}

export default App;
