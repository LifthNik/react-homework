import axios from "axios"

let mainUrl = 'https://jsonplaceholder.typicode.com';


let axiosUsers = axios.create({mainUrl});

let usersGet = {
    getUsers: () => axiosUsers.get(`${mainUrl}/users`)
}

export {usersGet};