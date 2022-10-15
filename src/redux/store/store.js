import {combineReducers, legacy_createStore} from "redux";

import {UsersReducer} from "../reducer/users.reducer";
import {PostsReducer} from "../reducer/posts.reduser";
import {CommentsReducer} from "../reducer/comments.reduser";

let reducer = combineReducers({

    UsersReducer,
    PostsReducer,
    CommentsReducer

});

let store = legacy_createStore(reducer)


export {
    combineReducers,
    store
};