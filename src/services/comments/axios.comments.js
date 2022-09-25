import axios from "axios"

let mainUrl = 'https://jsonplaceholder.typicode.com';


let axiosComment = axios.create({mainUrl});

let commentsGet = {
    comments: () => axiosComment.get(`${mainUrl}/comments`)
}

export {commentsGet};