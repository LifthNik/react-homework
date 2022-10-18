import axios from "axios";

import {mainURL} from "./axios.service.urls";

let axiosInstanceUsers = axios.create({mainURL});

let userService = {
    getUsers: () => axiosInstanceUsers.get(`${mainURL}/users`)
}

export {userService};