import {increament ,decrement,reset} from './Action';

const initialState = {
    counter : 0,

};

export default function CounterReducer(state = initialState,action)
{
    switch (action.type) {
        case increament:
            return {...state, counter:state.counter +1};
    case decrement:
        return{...state,counter:state.counter - 1};
        case reset :
            return initialState
        default:
            return state;
    }
}
