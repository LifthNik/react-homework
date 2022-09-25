import axios from "axios"

let mainUrl = 'https://jsonplaceholder.typicode.com';

let commentUrl = {
    comments: '/comments'
}

let axiosComment = axios.create({mainUrl});

let commentsGet = () => {
    comments :axiosComment.get(commentUrl.comments)
}

export {commentsGet};