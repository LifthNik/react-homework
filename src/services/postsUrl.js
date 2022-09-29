import {baseUrl, urls} from "../config";

let getPosts = () => {
    return fetch(`${baseUrl}${urls.posts}`)
        .then(items => items.json())
                };

export {getPosts};