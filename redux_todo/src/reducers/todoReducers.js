import { v4 as uuid } from "uuid";

const initialState = {
  all: [],
  mode: "all",
  newToDo: "",
  editToDo: "",
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        all: [
          ...state.all,
          {
            id: uuid(),
            action: action.value,
            done: false,
            isEdit: false,
          },
        ],
        newToDo: "",
      };

    case "NEW_TODO":
      return {
        ...state,
        newToDo: action.value,
      };

    case "EDIT_TODO":
      return {
        ...state,
        editToDo: action.value,
      };

    case "CLICK_ALL":
      const temp =
        action.payload.completed < action.payload.list
          ? state.all.map((item) => (item = { ...item, done: true }))
          : state.all.map((item) => (item = { ...item, done: false }));
      return {
        ...state,
        all: [...temp],
      };

    case "TOGGLE_COMPLETE":
      const toggle = state.all.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
      return {
        ...state,
        all: [...toggle],
      };

    case "EDIT":
      const edittodo = state.all.map((item) =>
        item.id === action.payload.id
          ? { ...item, action: action.payload.editToDo, isEdit: false }
          : item
      );
      return {
        ...state,
        all: [...edittodo],
        editToDo: "",
      };

    case "REPLACE":
      const isEdit = state.all.map((item) =>
        item.id === action.payload.id ? { ...item, isEdit: !item.isEdit } : item
      );
      return {
        ...state,
        all: [...isEdit],
        editToDo: action.payload.value,
      };

    case "DELETE":
      const filter = state.all.filter((item) => item.id !== action.id);
      return {
        ...state,
        all: [...filter],
      };

    case "FILTER":
      return {
        ...state,
        mode: action.mode,
      };

    case "CLEAR_ALL":
      const filterarray = state.all.filter((item) => item.done === false);
      return {
        ...state,
        all: [...filterarray],
      };

    default:
      return state;
  }
};

export default todoReducers;
