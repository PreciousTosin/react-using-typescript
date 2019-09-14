import { compose, createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import rootSaga from "../api/sagas/rootSaga";

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

export type AppState = ReturnType<typeof rootReducer>;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

const routingMiddleware = routerMiddleware(history);

function configureStore() {
  return createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routingMiddleware, sagaMiddleware))
  );
}

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
