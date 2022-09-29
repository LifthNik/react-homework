export default function Comment ({comment}) {

    return (<div className = 'Comment' id={comment.id}>
            {comment.id} - {comment.body}
            <div>{comment.body}</div>
        </div>
    );
};