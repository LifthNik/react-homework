import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
});

let getRocketsAxios = () => {
    return axiosInstance.get()
};

export {getRocketsAxios};
