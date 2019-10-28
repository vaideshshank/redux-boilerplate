import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"; //required for async actions
import promise from "redux-promise-middleware";

import mathReducer from "./reducers/MathReducer";
import userReducer from "./reducers/UserReducer";
// first arguent is the reducer,second argument is the initial state

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(logger, thunk, promise)
);

// console.log(store.getState());

export default store;
