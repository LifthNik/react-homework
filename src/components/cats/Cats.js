import {useCatDogReducer} from "../../reducers";
import {useRef} from "react";

export default function Cats () {


    let [state, dispatch] = useCatDogReducer();
    let catsIn = useRef();


    let createCat = () => {
        dispatch({type: 'createCat', payload: catsIn.current.value});
    }


    return (<div className = 'Cats'>

            Cats name: <input type="text" ref={catsIn}/>

            <button onClick={createCat}>Save cat</button>

            {state.cats.map(cat =>

                (<div key={cat.id}>

                        {cat.name}

                </div>)
            )}

            </div>
    );
};

export {Cats}