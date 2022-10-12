export default function Reducer (state, action) {

    let {type, payload} = action;

    switch (type) {

        case 'newCat':
            return {...state, cats: [...state.cats, {name: payload}]};

        case 'newDog':
            return {...state, dogs: [...state.dogs, {name: payload}]};

        default:
            console.log('1')
    }

};

export {Reducer}