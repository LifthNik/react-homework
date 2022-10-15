import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";


import {GET_USER} from "../../redux/actions/actions";
import {UserDetails} from "../userDetails/userDetails";

let OneUser = () => {

    let {user} = useSelector(state => state.UsersReducer);

    let dispatch = useDispatch();

    let {id} = useParams();

    useEffect(() => {
        dispatch({type: GET_USER, payload: +id})
    }, [id])

    return (<div className = 'oneUser'>

            {user && (<UserDetails user={user}/>)}

        </div>
    );
};

export {OneUser}