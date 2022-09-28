import {baseUrl,urls} from "../config/urls";

let getTodos = () => {
    fetch(baseUrl.todos)
        .then(items => items.json())
};

export {getTodos}