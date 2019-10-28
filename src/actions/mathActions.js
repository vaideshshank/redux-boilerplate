import store from "../store";

export const addNumber = num => {
  store.dispatch(
    //action
    {
      type: "ADD",
      payload: num
    }
  );
};

export const subtractNumber = num => {
  store.dispatch({
    type: "SUBTRACT",
    payload: num
  });
};
