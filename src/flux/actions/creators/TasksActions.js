import ActionTypes from './../types/TasksActionTypes';
import Dispatcher from './../../ProductivityDispatcher';

const TasksActions = {
    createTask(content) {
        Dispatcher.dispatch({
            type: ActionTypes.CREATE_TASK,
            value: content,
        });
    },

    showTasks(show) {
        Dispatcher.dispatch({
            type: ActionTypes.SHOW_TASKS,
            value: show,
        });
    },

    completeTask(id, isComplete) {
        Dispatcher.dispatch({
            type: ActionTypes.COMPLETE_TASK,
            id,
            value: isComplete,
        });
    },

    revertLastState() {
        Dispatcher.dispatch({
            type: ActionTypes.REVERT_LAST_STATE,
        });
    },
};

export default TasksActions;
