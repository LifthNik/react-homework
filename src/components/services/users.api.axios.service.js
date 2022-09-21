import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

let getUsersAxios = () => {
    return axiosInstance.get()
};

let getUserAxios = (id) => {
    return axiosInstance.get('/' + id)
};

export {getUsersAxios, getUserAxios};