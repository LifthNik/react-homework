import {GET_POSTS} from "../actions/actions";

let PostsReducer = (state = {posts: []}, action) => {
    let {type, payload} = action;

    switch (type) {
        case GET_POSTS:
            return {...state, posts: payload};

        default:
            return state;

    }
}

export {PostsReducer}