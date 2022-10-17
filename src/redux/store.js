import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./reduxSlices";

let mainReducer = combineReducers({
    userReducer
});

let setupStore = () => configureStore({
    reducer: mainReducer
});

export {
    setupStore
}

