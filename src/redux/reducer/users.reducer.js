import {GET_USER, GET_USERS} from "../actions/actions";

let UsersReducer = (state = {users: [], user: null}, action) => {
    let {type, payload} = action;

    switch (type) {
        case GET_USERS:
            return {...state, users: payload}

        case GET_USER:
            let user = state.users.filter(user => user.id === payload)[0];
            return {...state, user};

        default:
            return state
    }
}

export {UsersReducer}