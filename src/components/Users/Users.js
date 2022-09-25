import {useEffect, useState} from "react";

import {usersGet} from "../../services";
import User from "./User";
import UserForm from "./UserForm";

export default function Users() {

        let [users, setUsers] = useState([]);

        useEffect(() => {
            usersGet.getUsers().then(({data}) => setUsers(data))
        }, [])

        return (<div className='listOfUsers'>

                <div className='userForm'><UserForm setUsers={setUsers}/></div>

                {
                    users.map(user =>
                        <User
                            key={user.id}
                            user={user}
                        />)}
                </div>)}