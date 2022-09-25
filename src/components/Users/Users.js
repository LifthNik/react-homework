import {useEffect, useState} from "react";
import {usersGet} from "../../services";

export default function Users () {

    let users = () => {
        let [users, setUsers] = useState([]);
        useEffect(() => {
            usersGet.getUsers().then(({data}) => setUsers(data))
        }, [])

        return (<div>

                {
                    users.map(user => <User key={user.id} user={user}/>)
                }

            </div>
        )
    }

    export {Users};