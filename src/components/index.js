import {useState} from "react";
import {postService} from "../servises/posts.axios.service";
import Users from "./user/Users";
import ShowPosts from "./post/Posts";

export default function Constructor() {

    let [posts, setPosts] = useState([])

    let getUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => setPosts(data))
    }

    return (
        <div className="mainWindow">

            <Users getUserId={getUserId}/>

            <ShowPosts posts={posts}/>

        </div>
    );
}
