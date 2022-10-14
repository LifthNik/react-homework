import {baseUrl, urls} from "../config";

let getUsers = () => {
    return fetch(`${baseUrl}${urls.users}`)
        .then(items => items.json())
};

export {getUsers};