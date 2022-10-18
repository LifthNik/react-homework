import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postReducer, userReducer} from "./reduxSlices";

let mainReducer = combineReducers({
    userReducer,
    postReducer,
});

let setupStore = () => configureStore({
    reducer: mainReducer
});

export {
    setupStore
}

