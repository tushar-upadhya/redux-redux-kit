// Initial state of the cart
const INIT_STATE = {
  carts: [], // An empty array to hold the items in the cart
};

// The reducer function for the cart
export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      // Find the index of the item in the cart
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      // If the item is already in the cart, increment its quantity
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      // Remove all items with the given id from the cart
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      // Find the index of the item in the cart
      const ItemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      // If the quantity of the item is greater than or equal to 1, decrement it
      if (state.carts[ItemIndex_dec].qnty >= 1) {
        const dltItems = (state.carts[ItemIndex_dec].qnty -= 1);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[ItemIndex_dec].qnty === 1) {
        // If the quantity of the item is 1, remove it from the cart
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }

    default:
      // If the action type doesn't match any cases, return the current state
      return state;
  }
};
