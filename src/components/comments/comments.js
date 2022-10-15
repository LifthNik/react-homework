import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getComments} from "../../services";
import {GET_COMMENTS} from "../../redux/actions/actions";
import Comment from "./comment";


export default function Comments () {

    let {comments} = useSelector(state => state.CommentsReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        getComments().then(data => dispatch({type: GET_COMMENTS, payload: data}))
    }, [])


    return (<div className = 'Comments'>
            {
                comments.map(comment => <Comment key = {comment.id} comment = {comment}/>)
            }
        </div>
    );
};

export {Comments}