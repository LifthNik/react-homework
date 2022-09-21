import User from "./User";
import {useState, useEffect} from "react";
import {getUsersAxios} from "../services/users.api.axios.service";

export default function Users () {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))

    }, []);

    return (
        <div>
            {users.map((user, index) =>
                (<User
                key = {index}
                user={user}
                />))}


        </div>
    )








}