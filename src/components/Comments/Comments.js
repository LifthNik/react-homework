import {useEffect, useState} from "react";

import {commentsGet} from "../../services";
import Comment from "./Comment";

export default function Comments () {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentsGet.comments().then(({data}) => setComments(data))
    }, [])

    return (<div className='listOfComments'>

            {comments.map(comment =>
            <Comment
                key={comment.id}
                comment={comment}
            />)}

        </div>
    );
}