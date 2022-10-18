import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postService} from "../../services/post.service";
import {postActions} from "../../redux";

import Post from "./Post";

export default function Posts () {

    let dispatch = useDispatch();

    let {posts} = useSelector(state => state.postReducer);

    useEffect(() => {

        postService.getPosts().then(({data}) =>
            dispatch(postActions.getAllPosts(data)));

    }, [])


    return (<div className = 'Users'>
            {
                posts.map(post => <Post key = {post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts}