import {INCREMENT, DECREMENT, DIRECT_SET, RED, BLUE, GREEN} from './actionCreators';
const initialState = {
    count: 1,
    values: {
        red: 0,
        green: 0,
        blue: 0,
    }
};
export default function rootReducer (state=initialState, action) {
    console.log("rootReducer called with ", state, action);
    var newState = {...state};
    newState.values = {...state.values};
    switch (action.type) {
        case INCREMENT:
            newState.values[action.channel]++;
            return newState;
        case DECREMENT:
            newState.values[action.channel]--;
            return newState;
        case DIRECT_SET:
            return {...state, count: action.count};            
        default:
            return state;
    }
}
