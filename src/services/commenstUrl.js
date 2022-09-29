import {baseUrl, urls} from "../config";

let getComments = () => {
    return fetch(`${baseUrl}${urls.comments}`)
        .then(items => items.json())
        };

export {getComments}