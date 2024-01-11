// This is an action creator for the ADD action.
// It takes an item as a parameter and returns an action object.
// The action object has a type property of "ADD_CART", which is used by the reducer to determine how to update the state.
// The payload property contains the item that will be added to the cart.
export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// This is an action creator for the DLT action.
// It takes an id as a parameter and returns an action object.
// The action object has a type property of "RMV_CART", which is used by the reducer to determine how to update the state.
// The payload property contains the id of the item that will be removed from the cart.
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// This is an action creator for the REMOVE action.
// It takes an item as a parameter and returns an action object.
// The action object has a type property of "RMV_ONE", which is used by the reducer to determine how to update the state.
// The payload property contains the item that will be removed from the cart.
export const REMOVE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};
