import React from "react";
import { render } from "react-dom";
import App from "./containers/Handler";
import { Provider } from "react-redux";
import store from "./store";

// const myLogger = store => next => action => {
//   console.log("Action : ", action);
//   next(action);
// };

// store.subscribe(() => {
//   console.log("Store updated");
//   console.log(store.getState());
// });

// store.dispatch(
//   //action
//   {
//     type: "ADD",
//     payload: 3
//   }
// );

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 14
// });

// store.dispatch({
//   type: "SET_NAME",
//   payload: "Vaidesh"
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
