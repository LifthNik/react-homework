import axios from "axios";

import {mainURL} from "./axios.service.urls";

let axiosInstancePosts = axios.create({mainURL});

let postService = {
    getPosts: (userId) => axiosInstancePosts.get(`${mainURL}/posts/?userId=${userId}`)
}

export  {postService}