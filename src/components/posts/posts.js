import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import {getPosts} from "../../services/postsUrl";
import {Post} from "./post";

export default function Posts () {

    let {postId} = useParams();

    let [post, setPost] = useState({});

    useEffect(() => {
        getPosts(postId).then(value => setPost(value))
    }, [postId]);

    return (<div className='Posts'>
            {<Post post = {post} postId ={postId}/>}
        </div>
    );
}