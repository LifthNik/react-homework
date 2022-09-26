export default function Comment ({comment}) {

    return (<div className='comment' id={comment.id}>

    <h3>{comment.id} --- {comment.name}. {comment.email}</h3>
            <h5>{comment.body}</h5>
        </div>
    );
}