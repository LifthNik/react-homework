import {GET_USER, GET_USERS} from "../actions/actions";

let UsersReducer = (state = {users: [], user: null}, action) => {
    let {type, payload} = action;

    switch (type) {
        case GET_USERS:
            return {...state, users: payload}

        case GET_USER:
            let getUser = state.users.find(user => user.id === payload);
            return {...state, getUser};

        default:
            return state
    }
}

export {UsersReducer}