import './App.css';
import {useState} from "react";

import ShowPosts from "./components/post/Posts";
import Users from "./components/user/Users";
import {postService} from "./servises/posts.axios.service";

export default function App() {

    let [posts, setPosts] = useState([])

    let getUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => setPosts(data))
    }

  return (
    <div className="App">

        <Users getUserId={getUserId}/>
        <ShowPosts posts={posts}/>

    </div>
  );
}
