import axios from "axios";

import {mainUrl} from "./axios.service.urls";

let axiosInstanceUsers = axios.create({mainUrl});

let userService = {
    getUsers: () => axiosInstanceUsers.get(`${mainUrl}/users`)
}

export {userService};