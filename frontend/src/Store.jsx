import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  paymentMethod: localStorage.getItem("paymentMethod")
    ? localStorage.getItem("paymentMethod")
    : "",
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      localStorage.removeItem("userInfo"); // Clear userInfo from localStorage
      localStorage.removeItem("paymentMethod"); // Clear paymentMethod from localStorage
      return {
        ...state,
        userInfo: null,
        paymentMethod: "", // Corrected from PaymentMethod to paymentMethod
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
