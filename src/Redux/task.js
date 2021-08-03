import * as ActionTypes from '../Redux/ActionTypes';

export const Task = (state = {
    errMess: null,
    tasks: []
}, action) => {
    switch (action.type) {

        case ActionTypes.TASK_FAILED:
                return {...state, isLoading: false, errMess: action.payload, tasks:[]};

        case ActionTypes.ADD_TASK: 
        var task = action.payload;
        return {...state, tasks: state.tasks.concat(task)};
        default:
            return state;
    }
}