import {Link} from "react-router-dom";

export default function User ({user}) {

    return (

        <div className = 'User'>

            User ID:{user.id}.
            {user.name}.
            UserName: {user.username}.

            <div>
                <Link to={user.id.toString()}>User Details</Link>
            </div>

        </div>
    );
};

export {User}