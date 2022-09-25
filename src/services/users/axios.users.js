import axios from "axios"

let mainUrl = 'https://jsonplaceholder.typicode.com';

let userUrl = {
    users: '/users'
}

let axiosUsers = axios.create({mainUrl});

let usersGet = () => {
    getUsers:axiosUsers.get(userUrl.users)
}

export {usersGet};