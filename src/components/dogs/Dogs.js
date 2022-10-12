import {useCatDogReducer} from "../../reducers";
import {useRef} from "react";

export default function Dogs () {


    let [state, dispatch] = useCatDogReducer();
    let dogsIn = useRef();


    let createDog = () => {
        dispatch({type: 'createDog', payload: dogsIn.current.value});
    }


    return (<div className = 'Dogs'>

            Dogs name: <input type="text" ref={dogsIn}/>

            <button onClick={createDog}>Save dog</button>

            {state.dogs.map(dog =>

                (<div key={dog.id}>

                        {dog.name}

                </div>)
            )}

            </div>
    );
};

export {Dogs}