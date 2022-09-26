export default function Post ({post}) {


    return (
        <div className='post'>


        <h3>{post.id}. {post.title} </h3>
            <h5>{post.body}</h5>

        </div>
    )};
