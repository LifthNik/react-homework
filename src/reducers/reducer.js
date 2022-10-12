import {useReducer} from "react";

let Reducer = (state, action) => {

    let {type, payload} = action;

    switch (type) {

        case 'createCat':
            return {...state, cats: [...state.cats, {name: payload}]};

        case 'createDog':
            return {...state, dogs: [...state.dogs, {name: payload}]};

    }
}

let useCatDogReducer = () => useReducer(Reducer, {cats: [], dogs: []})

export {useCatDogReducer}