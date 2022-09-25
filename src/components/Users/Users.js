import {useEffect, useState} from "react";

import {usersGet} from "../../services";
import User from "./User";

export default function Users() {

        let [users, setUsers] = useState([]);

        useEffect(() => {
            usersGet.getUsers().then(({data}) => setUsers(data))
        }, [])

        return (<div className='listOfUsers'>

                {
                    users.map(user =>
                        <User
                            key={user.id}
                            user={user}
                        />)}
                </div>)}