import User from "./User";
import {useState, useEffect} from "react";
import {getUsersAxios} from "../../services/users.api.axios.service";
import {Info} from "./user.info";

export default function Users() {

    const [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);

    let lift = (person) => {
        setUser(person)
    }

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))

    }, []);


    return (
        <div className='mainUsersBox'>
            {users.map((user, index) =>
                (<User
                    key={index}
                    user={user}
                    lift={lift}
                />))}


            <Info key={user.id} user={user}/>

        </div>
    );
};
