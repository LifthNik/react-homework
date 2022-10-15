export default function Comment ({comment}) {

    return (<div className = 'Comment'>
            
            Comment ID:{comment.id}
            <br/>
            Post: {comment.postId}.
            <br/>
            Post Name: {comment.name}.
            <br/>
            Text: {comment.body}
        </div>
    );
};

export {Comment}