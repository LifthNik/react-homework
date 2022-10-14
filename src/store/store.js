import {createStore} from "redux";

let store = createStore((state = {users: []}, action)=> {

    console.log(state, action)

    return state

});

export {store};