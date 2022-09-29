export default function Comment ({comment}) {

    return (<div className = 'Comment'>
            {comment.id} - {comment.body}
            <div>{comment.body}</div>
        </div>
    );
};