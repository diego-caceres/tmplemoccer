import storeReducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== "production") {
  //middlewares.push(logger);
}

const configureStore = () => {
  const store = createStore(
    storeReducer,
    undefined /*persistedState*/,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
