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

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
