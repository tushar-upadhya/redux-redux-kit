import { actionTypes } from "../constants/actionType";

const INITIAL_STATE = {
  product: [],
  id: 1,
  title: "tushar",
  category: "web dev",
};

export const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      return state;
    default:
      return state; // return current state if no action matches
  }
};
