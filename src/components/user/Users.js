import {useEffect, useState} from "react";

import {userService} from "../../servises/users.axios.service";
import User from "./User";


export default function Users ({getUserId}) {

    let [users,setUsers] = useState([]);

useEffect(() => {
    userService.getUsers().then(({data}) => setUsers(data))
}, [])

    return (
        <div className='usersBox'>
            {
                users.map
                (user =>
                    <User
                    key = {user.id}
                    user = {user}
                    getUserId = {getUserId}
                    />
                )
            }
        </div>

    )
}