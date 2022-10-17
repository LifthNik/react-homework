import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

export default function User ({user}) {

    let dispatch = useDispatch();

    return (<div className='User'>

            <p>id:{user.id}</p>
            <p>name:{user.name}</p>

            <button onClick={() => dispatch(userActions.setSingleUser(user))}>
                Set User
            </button>

        </div>
    );
};

export {User}