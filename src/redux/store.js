import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import itemsReducer from "./ducks/itemReducer";

const middleware = applyMiddleware(promiseMiddleware());
//creates store
const store = createStore(itemsReducer, middleware);

export default store;
