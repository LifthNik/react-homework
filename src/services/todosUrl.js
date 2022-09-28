import {baseUrl,urls} from "../config";

let getTodos = () => {
    return fetch(`${baseUrl}${urls.todos}`)
        .then(items => items.json())
};

export {getTodos}