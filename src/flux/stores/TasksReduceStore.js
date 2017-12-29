import { ReduceStore } from 'flux/utils';
import { generate as id } from 'shortid';
import Dispatcher from './../ProductivityDispatcher';
import ActionTypes from './../actions/types/TasksActionTypes';

class TasksReduceStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
        this._history = [];
    }

    getInitialState() {
        return {
            tasks: [
                {
                    id: id(),
                    content: 'Be content',
                    complete: false,
                },
                {
                    id: id(),
                    content: 'Be happy',
                    complete: false,
                },
                {
                    id: id(),
                    content: 'Survive',
                    complete: true,
                },
            ],
            showComplete: true,
        };
    }

    reduce(state, action) {
        let newState = { ...state, tasks: [...state.tasks] };
        if (action.type !== ActionTypes.REVERT_LAST_STATE) {
            this._history.push(state);
        }
        switch (action.type) {
            case ActionTypes.CREATE_TASK:
                newState.tasks.push({
                    id: id(),
                    content: action.value,
                    complete: false,
                });
                return newState;

            case ActionTypes.COMPLETE_TASK:
                const affectedElementIndex = newState.tasks.findIndex(
                    task => task.id === action.id
                );

                newState.tasks[affectedElementIndex] =
                    { ...state.tasks[affectedElementIndex], complete: action.value };
                return newState;

            case ActionTypes.SHOW_TASKS:
                // newState = { ...state, tasks: [...state.tasks], showComplete: action.value };
                newState.showComplete =  action.value ;
                return newState;

            case ActionTypes.REVERT_LAST_STATE:
                if (this._history.length > 0) {
                    newState = this._history.pop();
                }
                return newState;

            default:
                return state;
        } // End of Switch statement
    } // End of Reduce Method
}

export default new TasksReduceStore();
