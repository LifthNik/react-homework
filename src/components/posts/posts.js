import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import {getPosts} from "../../services/postsUrl";
import {Post} from "./post";

export default function Posts () {

    let {postId} = useParams();

    let [posts, setPosts] = useState({});

    useEffect(() => {
        getPosts(postId).then(value => setPosts(value))
    }, [postId]);

    return (<div className='Posts'>
            {<Post post = {posts} postId ={postId}/>}
        </div>
    );
}