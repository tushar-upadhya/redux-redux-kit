// Importing the createStore function from redux
// This function is used to create the redux store
import { createStore } from "redux";

// Importing the rootReducer from the reducers folder
// The rootReducer is a combination of all the reducers in the application
import rootReducer from "./reducers/rootReducer";

// Creating the redux store with the rootReducer
// The store is where the state of the application is held
const store = createStore(rootReducer);

// Exporting the store
// The store will be used to provide the state to the application and dispatch actions
export default store;
