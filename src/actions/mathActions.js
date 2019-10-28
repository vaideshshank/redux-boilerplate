export const addNumber = num => {
  return dispatch => {
    setTimeout(() => {
      return dispatch({
        type: "ADD",
        payload: num
      });
    }, 2000);
  };
};

export const subtractNumber = num => {
  return {
    type: "SUBTRACT",
    payload: num
  };
};
