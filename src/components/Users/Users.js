import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../services/user.service";
import {userActions} from "../../redux";
import User from "./User";

export default function Users () {

    let dispatch = useDispatch();

    let {users} = useSelector(state => state.userReducer);

    useEffect(() => {

        userService.getUsers().then(({data}) =>
            dispatch(userActions.getAll(data)));

    }, [])


    return (<div className = 'Users'>
            {
                users.map(user => <User key = {user.id} user={user}/>)
            }
        </div>
    );
};

export {Users}