import {GET_COMMENTS} from "../actions/actions";

let CommentsReducer = (state = {comments: []}, action) => {
    let {type, payload} = action;

    switch (type) {
        case GET_COMMENTS:
            return {...state, comments: payload};

        default:
            return state;

    }
}

export {CommentsReducer}