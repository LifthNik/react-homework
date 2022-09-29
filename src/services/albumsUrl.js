import {baseUrl, urls} from "../config";

let getAlbums = () => {
    return fetch(`${baseUrl}${urls.albums}`)
        .then(items => items.json())
        };

export {getAlbums}