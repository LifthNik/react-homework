let Post = ({post}) => {

    return (<div className='Post' id={post.id}>
            {post.id} - {post.title}
            <div>{post.body}</div>
        </div>
    );
}

export {Post}