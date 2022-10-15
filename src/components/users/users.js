import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getUsers} from "../../services";
import {GET_USERS} from "../../redux/actions/actions";
import User from "./user";

export default function Users () {

    let {users} = useSelector(state => state.UsersReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        getUsers().then(data => dispatch({type: GET_USERS, payload: data}))
    }, [])


    return (<div className = 'Users'>
            {
                users.map(user => <User key = {user.id} user = {user}/>)
            }
        </div>
    );
};

export {Users}