import axios from "axios";

import {mainUrl} from "./axios.service.urls";

let axiosInstancePosts = axios.create({mainUrl});

let postService = {
    getPosts: (userId) => axiosInstancePosts.get(`${mainUrl}/posts/?userId=${userId}`)
}

export  {postService}