import {useState} from "react";
import {postService} from "../../servises/posts.axios.service";
import Post from "./Post";
import Users from "../user/Users";

export default function ShowPosts () {

    let [posts, setPosts] = useState([])

    let getUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => setPosts(data))
    }

    return(
        <div className='postBox'>
            <Users getUserId={getUserId}/>
            <Post posts = {posts}/>


        </div>
    )
}