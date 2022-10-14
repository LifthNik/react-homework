import {baseUrl, urls} from "../config";

let getUsers = () => {
    fetch(`${baseUrl}${urls.users}`)
        .then(items => items.json())
        .then(item => {
        });
}