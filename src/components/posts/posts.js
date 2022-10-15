import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getPosts} from "../../services";
import {GET_POSTS} from "../../redux/actions/actions";
import Post from "./post";

export default function Posts () {

    let {posts} = useSelector(state => state.PostsReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        getPosts().then(data => dispatch({type: GET_POSTS, payload: data}))
    }, [])


    return (<div className = 'Posts'>
            {
                posts.map(post => <Post key = {post.id} post = {post}/>)
            }
        </div>
    );

};

export {Posts}