import axios from "axios"

let mainUrl = 'https://jsonplaceholder.typicode.com';


let axiosComment = axios.create({mainUrl});

let commentsGet = {
    getComments: () => axiosComment.get(`${mainUrl}/comments?postId=100`),
    newComment: (comment) => axiosComment.post(`${mainUrl}/comments?postId=100`, comment)
}

export {commentsGet};