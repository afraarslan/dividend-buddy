import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./allReducers";

function configureStore(initialState) {
    const middleware = [thunk]

    const store = createStore(
        allReducers,
        initialState,
        compose(applyMiddleware(...middleware))
    )

    return store;
}

const store = configureStore();

export default store;
