import { actionTypes } from "../constants/actionType";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
