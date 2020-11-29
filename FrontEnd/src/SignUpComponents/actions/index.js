export const logIn = (token, username) => {
  return {
    type: "LOGIN",
    payload: {
      token: token,
      userName: username,
    },
  };
};

export const signIn = (token, username) => {
  return {
    type: "SIGNIN",
    payload: {
      token: token,
      userName: username,
    },
  };
};

export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};
