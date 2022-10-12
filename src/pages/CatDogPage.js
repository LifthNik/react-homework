import {useReducer} from "react";

import Reducer from "../reducer/Reducer";

export default function CatDogPage () {

    let [state, dispatch] = useReducer(Reducer, {cats:[], dogs:[]});

let catAdd = useRef();

    return (<div className = 'CatDogPage'>

            <div className='cats'>

                <h3>Cats:</h3>
                <input type="text"/>

            </div>

        </div>
    );
};