import {axiosService} from "./axios.service";

import {urls} from "../config";

let userService = {

    getUsers:() => axiosService.get(urls.users)
}

export {
    userService
};