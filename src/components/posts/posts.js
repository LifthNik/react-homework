import {useEffect, useState} from "react";

import {getPosts} from "../../services/postsUrl";
import {Post} from "./post";

export default function Posts () {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, [])

    return (<div className='Posts'>
            {
                posts.map(post => <Post key = {post.id} post ={post}/>)
            }
        </div>
    );
}