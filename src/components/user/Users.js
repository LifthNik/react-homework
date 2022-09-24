import {useEffect, useState} from "react";
import {UsersAxios} from "../../servises/users.axios.service";
import Users from "./User";

export default function ShowUsers () {
    let [users,setUsers] = useState([]);
    let [user, setUser] = useState([]);

useEffect(() => {
    UsersAxios().then(value => setUsers(value.data))
}, [])

    
    return (
        <div className='usersBox'>
            {users.map((user, index) =>
                (<Users
                key = {index}
                user = {user}
                />
                ))}
        </div>

    )
}