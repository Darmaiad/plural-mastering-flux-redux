import { ReduceStore } from 'flux/utils';
import Dispatcher from './../ProductivityDispatcher';
import ActionTypes from './../actions/types/ControlPanelActionTypes';

class ControlPanelReduceStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return localStorage['preferences'] ? JSON.parse(localStorage['preferences']) : {
            userName: 'George',
            fontSize: 'small',
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.UPDATE_USERNAME:
                localStorage['preferences'] = JSON.stringify({ ...state, userName: action.value, });
                return JSON.parse(localStorage['preferences']);

            case ActionTypes.UPDATE_FONT_SIZE_PREFERENCE:
                localStorage['preferences'] = JSON.stringify({ ...state, fontSize: action.value, });
                return JSON.parse(localStorage['preferences']);
                // return { ...state, fontSize: action.value, };

            default:
                return state;
        }
    }
}

export default new ControlPanelReduceStore();
