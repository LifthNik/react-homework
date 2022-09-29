import {useEffect, useState} from "react";

import Comment from "./comment";
import {getComments} from "../../services/commenstUrl";

export default function Comments () {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value));
    }, [])

    return (<div className = 'Comments'>
            {
                comments.map(comment => <Comment key = {comment.id} comment ={comment}/>)
            }
        </div>
    );
};