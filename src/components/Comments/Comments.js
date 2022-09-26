import {useEffect, useState} from "react";

import {commentsGet} from "../../services";
import Comment from "./Comment";
import {CommentForm} from "./CommentForm";

export default function Comments () {

    let [comments, setComments] = useState([]);


    useEffect(() => {
        commentsGet.getComments().then(({data}) => setComments(data))
    }, [])


    return (<div className='listOfComments'>

            <div className='commentForm'> <CommentForm setComments={setComments}/> </div>

            {comments.map(comment =>
            <Comment
                key={comment.id}
                comment={comment}
            />)}

        </div>
    );
}