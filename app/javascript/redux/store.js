import { createStore, applyMiddleware } from "redux";
import messageReducer from "./messageReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const storeEnhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(messageReducer, storeEnhancers);

export default store;
