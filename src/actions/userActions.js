import store from "../store";

export const setName = name => {
  store.dispatch({
    type: "SET_NAME",
    payload: name
  });
};
