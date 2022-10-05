import {Link, Outlet} from "react-router-dom";

export default function Comment ({comment}) {

    return (<div className = 'comment' id={comment.id}>

            {comment.id}.
            <h4>{comment.body}</h4>

            <Link to={`${comment.postId}`} className='postLink'>Post details</Link>


        </div>
    );
};