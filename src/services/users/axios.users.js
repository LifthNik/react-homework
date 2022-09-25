import axios from "axios"

let mainUrl = 'https://jsonplaceholder.typicode.com';


let axiosUsers = axios.create({mainUrl});

let usersGet = {
    getUsers: () => axiosUsers.get(`${mainUrl}/users`),
    addUser: (user) => axiosUsers.post(`${mainUrl}/users`, user)
}

export {usersGet};