import {combineReducers, legacy_createStore} from "redux";

let userReducer = ((state = {users: [], user: {}}, action) => {

    switch (action.type) {

        case 'LOAD_USERS':

            return {
                ...state,
                users: action.payload
            };

        case "CHOOSE_USER":
            let id = action.payload;
            let user = state.users.find(value => value.id === id)

            return {...state, user: user};


        default:
            return state;
    }

});

let postReducer = ((state = {posts: [], post: {}}, action)=> {

    switch (action.type) {

        case 'LOAD_POSTS':

            return {
                ...state,
                posts: action.payload
            };

        case "CHOOSE_POST":
            let id = action.payload;
            let post = state.posts.find(value => value.id === id)

            return {...state, post};


        default:
            return state;
    }

});

let commentReducer = ((state = {comments: [], comment: {}}, action)=> {

    switch (action.type) {

        case 'LOAD_COMMENTS':

            return {
                ...state,
                comments: action.payload
            };

        case "CHOOSE_COMMENT":
            let id = action.payload;
            let comment = state.comments.find(value => value.id === id)

            return {...state, comment};


        default:
            return state;
    }

});

let reducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
});

let store = legacy_createStore(reducer)

export {store};