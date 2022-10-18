import {createSlice} from "@reduxjs/toolkit";

let postSlice = createSlice({
    name: 'postSlice',

    initialState: {
        posts: [],
        onePost: null,
        loading: false,
        error: null
    },

    reducers: {
        getAllPosts: (state, action) => {
            state.posts = action.payload;
        },
        setOnePost:(state, action) => {
            state.onePost = action.payload
        }
    }
});

let {reducer: postReducer, actions:{getAllPosts, setOnePost}} = postSlice;

let postActions = {
    getAllPosts,
    setOnePost
}

export {
    postReducer,
    postActions
}