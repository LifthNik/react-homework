import axios from "axios"

let mainUrl = 'https://jsonplaceholder.typicode.com';


let axiosComment = axios.create({mainUrl});

let commentsGet = {
    getComments: () => axiosComment.get(`${mainUrl}/comments?postId=1`),
    newComment: (comment) => axiosComment.post(`${mainUrl}/comments?postId=1`, comment)
}

export {commentsGet};