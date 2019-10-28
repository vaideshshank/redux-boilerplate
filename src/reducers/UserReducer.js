const UserReducer = (
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

export default UserReducer;
