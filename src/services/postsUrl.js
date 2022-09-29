import {baseUrl, urls} from "../config";


let getPosts = (id) => {
    return fetch(`${baseUrl}${urls.posts}`)
        .then(items => items.json())
                };

export {getPosts};