import { v4 as uuid } from "uuid";

const initialState = {
  all: [],
  mode: "all",
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
      };

    case "CLICK_ALL":
      const temp =
        action.completed < action.list
          ? state.all.map((item) => (item = { ...item, done: true }))
          : state.all.map((item) => (item = { ...item, done: false }));
      return {
        ...state,
        all: [...temp],
      };

    case "TOGGLE":
      const toggle = state.all.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
      return {
        ...state,
        all: [...toggle],
      };

    case "EDIT":
      const edittodo = state.all.map((item) =>
        item.id === action.id
          ? { ...item, action: action.editToDo, isEdit: false }
          : item
      );
      return {
        ...state,
        all: [...edittodo],
      };

    case "REPLACE":
      const isedit = state.all.map((item) =>
        item.id === action.id ? { ...item, isEdit: !item.isEdit } : item
      );
      return {
        ...state,
        all: [...isedit],
      };

    case "DELETE":
      const filter = state.all.filter((item) => item.id !== action.id);
      return {
        ...state,
        all: [...filter],
      };

    case "ALL":
      return {
        ...state,
        mode: "all",
      };

    case "ACTIVE":
      return {
        ...state,
        mode: "active",
      };

    case "COMPLETED":
      return {
        ...state,
        mode: "completed",
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
