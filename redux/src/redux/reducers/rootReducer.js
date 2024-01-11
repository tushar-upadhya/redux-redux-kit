// Importing the combineReducers function from redux
// This function is used to combine multiple reducers into one
import { combineReducers } from "redux";

// Importing the cartReducer from the reducer file
// This reducer handles actions related to the cart
import { cartReducer } from "./reducer";

// Combining the reducers into one root reducer
// If you have more reducers, you can add them here
const rootReducer = combineReducers({
  cartReducer, // The cartReducer is now a part of the rootReducer
});

// Exporting the rootReducer
// The rootReducer will be used when creating the redux store
export default rootReducer;
