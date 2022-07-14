export const addTodo = (value) => {
  return {
    type: "ADD_TODO",
    value,
  };
};

export const newTodo = (value) => {
  return {
    type: "NEW_TODO",
    value,
  };
};

export const editTodo = (value) => {
  return {
    type: "EDIT_TODO",
    value,
  };
};

export const checkAll = (completed, list) => {
  return {
    type: "CLICK_ALL",
    payload: { completed: completed, list: list },
  };
};

export const toggleDone = (id) => {
  return {
    type: "TOGGLE_COMPLETE",
    id,
  };
};

export const edit = (id, editToDo) => {
  return {
    type: "EDIT",
    payload: { id: id, editToDo: editToDo },
  };
};

export const replace = (id, value) => {
  return {
    type: "REPLACE",
    payload: { id: id, value: value },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE",
    id,
  };
};

export const clickFilter = (mode) => {
  return {
    type: "FILTER",
    mode,
  };
};

export const clear = () => {
  return {
    type: "CLEAR_ALL",
  };
};
