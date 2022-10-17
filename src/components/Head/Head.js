import {useSelector} from "react-redux";

export default function UserHead () {

    let {singleUser} = useSelector(state => state.userReducer);

    return (<div className = 'UserHead'>
            {singleUser && singleUser.name}
        </div>
    );
};

