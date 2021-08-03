import * as ActionTypes from '../Redux/ActionTypes';



// ADD TASK 
export const addTask = (task) => ({
    type: ActionTypes.ADD_TASK,
    payload: task
});

// post Task to HOME SCREEN
export const postTask = (taskId, title, deadline, startTime, endTime, remind, repeat) => (dispatch) => {

    const newTaks = {
        postId: taskId,
        title: title,
        deadline: deadline,
        startTime: startTime,
        endTime: endTime,
        remind: remind,
        repeat: repeat
    }

    newTaks.date = new Date().toISOString();

    setTimeout(() => {
        dispatch(addTask(newTaks));
    })
}

// ADD COMPLETE TASK
export const addCompleteTask = (taskId) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: taskId
})