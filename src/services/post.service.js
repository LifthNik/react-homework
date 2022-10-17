import {axiosService} from "./axios.service";

import {urls} from "../config";

let postService = {

    getPosts:() => axiosService.get(urls.posts)
}

export {
    postService
};