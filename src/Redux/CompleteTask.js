import * as ActionTypes from '../Redux/ActionTypes';

export const CompleteTask = (state = [], action) =>  {
    switch (action.payload) {
        case ActionTypes.ADD_FAVORITE: 
        if (state.some (el => el === action.payload))
            return state;
        else 
        return state.concat(action.payload);
        default:
        return state;
    }
}