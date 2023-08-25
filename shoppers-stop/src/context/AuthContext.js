import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export const AuthContexts = createContext();

const intialState = {
  currentUser: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload };
    case "LOGOUT":
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  // console.log(state);

  const Login = (userData) => {
    // localStorage.setItem("current-user", JSON.stringify(userData.user));
    localStorage.setItem(
      "shoppersStopUserToken",
      JSON.stringify(userData.token)
    );

    dispatch({
      type: "LOGIN",
      payload: userData.user,
    });
  };

  const Logout = () => {
    localStorage.removeItem("shoppersStopUserToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = JSON.parse(localStorage.getItem("shoppersStopUserToken"));
      if (token?.length) {
        const response = await axios.post(
          "http://localhost:8002/get-current-user",
          { token }
        );

        if (response.data.success) {
          dispatch({
            type: "LOGIN",
            payload: response.data.user,
          });
        } else {
          toast.error(response.data.message);
        }
      }
    };

    getCurrentUser();
  }, []);

  return (
    <AuthContexts.Provider value={{ state, Login, Logout }}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;

// ------------------------------------CONTEXT-LS------------------------------------------->

// import { useEffect } from "react";
// import { useReducer } from "react";
// import { createContext } from "react";

// export const AuthContexts = createContext();

// const initalState = {
//   currentUser: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, currentUser: action.payload };
//     case "LOGOUT":
//       return { currentUser: null };
//     default:
//       return state;
//   }
// };

// const AuthPovider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initalState);
//   //   console.log(state);

//   const login = (userData) => {
//     localStorage.setItem("current-user", JSON.stringify(userData));

//     dispatch({
//       type: "LOGIN",
//       payload: userData,
//     });
//   };

//   const logout = () => {
//     localStorage.removeItem("current-user");

//     dispatch({
//       type: "LOGOUT",
//     });
//     alert("You are logged out successfully!");
//   };

//   useEffect(() => {
//     const isCurrentUserLoggedIn = JSON.parse(
//       localStorage.getItem("current-user")
//     );

//     if (isCurrentUserLoggedIn) {
//       dispatch({
//         type: "LOGIN",
//         payload: isCurrentUserLoggedIn,
//       });
//     }
//   }, []);

//   return (
//     <AuthContexts.Provider value={{ login, logout, state }}>
//       {children}
//     </AuthContexts.Provider>
//   );
// };

// export default AuthPovider;
