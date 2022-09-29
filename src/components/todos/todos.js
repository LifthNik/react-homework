import {useEffect, useState} from "react";

import {getTodos} from "../../services/todosUrl";
import {Todo} from "./todo";

export default function Todos () {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(value => setTodos(value))
    }, [])

    return (
        <div className='Todos'>
            {
                todos.map(todo => <Todo key={todo.id} todo ={todo}/>)
            }
        </div>
    );
}