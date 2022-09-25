export default function Comment ({comment}) {

    return (<div className='comment' id={comment.id}>

    <h2>{comment.id} --- {comment.name}</h2>
        </div>
    );
}