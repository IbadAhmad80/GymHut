const state = {
  userName: "",
  accessToken: "",
};

const accountReducer = (reducer_state = state, action) => {
  switch (action.type) {
    case "SIGNIN":
      reducer_state.userName = action.payload.userName;
      reducer_state.accessToken = action.payload.token;
      return reducer_state;
    case "LOGIN":
      reducer_state.userName = action.payload.userName;
      reducer_state.accessToken = action.payload.token;
      return reducer_state;
    case "LOGOUT":
      reducer_state.userName = "";
      reducer_state.token = "";
      return reducer_state;
      return reducer_state;
    default:
      return reducer_state;
  }
};

export default accountReducer;
