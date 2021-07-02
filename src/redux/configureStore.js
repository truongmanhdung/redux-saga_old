import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import myReducer from "../reducers/index";
import rootSaga from "../sagas/index";
const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              shouldHotReload: false,
          })
        : compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middleware = [thunk, sagaMiddleware];
    const enhancers = [applyMiddleware(...middleware)];
    const store = createStore(myReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
