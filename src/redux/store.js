import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { todos } from "./app.sagas";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(todos);

export default store;
