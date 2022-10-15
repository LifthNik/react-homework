export default function Post ({post}) {

    return (<div className='Post'>

            Post ID:{post.id}
            <br/>
            Title: {post.title}
            <br/>
            Text: {post.body}
            <br/>
        </div>
    );
};

export {Post}