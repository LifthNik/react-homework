import {createSlice} from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: 'userSlice',

    initialState: {
        users: [],
        singleUser: null,
        loading: false,
        error: null
    },

    reducers: {
        getAll: (state, action) => {
            state.users = action.payload;
        },
        setSingleUser:(state, action) => {
            state.singleUser = action.payload
        }
    }
});

let {reducer: userReducer, actions:{getAll, setSingleUser}} = userSlice;

let userActions = {
    getAll,
    setSingleUser
}

export {
    userReducer,
    userActions,
}