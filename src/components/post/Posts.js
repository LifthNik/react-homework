import Post from "./Post";

export default function ShowPosts({posts}) {

    return (
        <div className='postBox'>
            {
                posts.map(post =>
                    <Post
                        key={post.id}
                        post={post}
                    />)
            }

        </div>
    )
};