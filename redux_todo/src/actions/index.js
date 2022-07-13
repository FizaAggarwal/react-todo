export const addTodo = (value) => {
  return {
    type: "ADD_TODO",
    value,
  };
};

export const checkAll = (completed, list) => {
  return {
    type: "CLICK_ALL",
    completed,
    list,
  };
};

export const toggleDone = (id) => {
  return {
    type: "TOGGLE",
    id,
  };
};

export const edit = (id, editToDo) => {
  return {
    type: "EDIT",
    id,
    editToDo,
  };
};

export const replace = (id) => {
  return {
    type: "REPLACE",
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE",
    id,
  };
};

export const clickAll = () => {
  return {
    type: "ALL",
  };
};

export const clickActive = () => {
  return {
    type: "ACTIVE",
  };
};

export const clickCompleted = () => {
  return {
    type: "COMPLETED",
  };
};

export const clear = () => {
  return {
    type: "CLEAR_ALL",
  };
};
