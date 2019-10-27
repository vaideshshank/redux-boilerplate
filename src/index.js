import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const initState = {
  result: 1,
  lastValues: []
};

const mathReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
      break;
  }
  return state;
};

const userReducer = (
  state = {
    name: "Max",
    age: 7
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

const myLogger = store => next => action => {
  console.log("Action : ", action);
  next(action);
};

// first arguent is the reducer,second argument is the initial state
const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(myLogger, logger)
);

store.subscribe(() => {
  console.log("Store updated");
  console.log(store.getState());
});

store.dispatch(
  //action
  {
    type: "ADD",
    payload: 3
  }
);

store.dispatch({
  type: "SUBTRACT",
  payload: 14
});

store.dispatch({
  type: "SET_NAME",
  payload: "Vaidesh"
});
