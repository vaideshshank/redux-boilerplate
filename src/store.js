import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import mathReducer from "./reducers/MathReducer";
import userReducer from "./reducers/UserReducer";
// first arguent is the reducer,second argument is the initial state

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(logger)
);

console.log(store.getState());

export default store;
