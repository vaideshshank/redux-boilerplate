export const setName = name => {
  // return dispatch => {
  //   setTimeout(() => {
  //     return dispatch({
  //       type: "SET_NAME",
  //       payload: name
  //     });
  //   }, 2000);
  // };

  return {
    type: "SET_NAME",
    payload: new Promise((res, rej) => {
      setTimeout(() => {
        res(name);
      }, 2000);
    })
  };
};
