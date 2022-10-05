let Post = ({post}) => {

    return (<div className='Post'>
            {post.id} - {post.title}
            <div>{post.body}</div>
        </div>
    );
}

export {Post}