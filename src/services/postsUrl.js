import {baseUrl, urls} from "../config";


let getPosts = (id) => {
    return fetch(`${baseUrl}${urls.posts}/${id}`)
        .then(items => items.json())
                };
export {getPosts};