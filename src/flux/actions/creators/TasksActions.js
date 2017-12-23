'use strict';
import ActionTypes from './../types/ControlPanelActionTypes';
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
};

export default TasksActions;
