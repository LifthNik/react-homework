import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

let UsersAxios = () => {
    return axiosInstance.get()
}

export {UsersAxios}