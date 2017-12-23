import { ReduceStore } from 'flux/utils';
import Dispatcher from './../ProductivityDispatcher';
import ActionTypes from './../actions/types/ControlPanelActionTypes';

class ControlPanelReduceStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
		return {
			userName: 'George',
			fontSize: 'small',
		};
	}

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.UPDATE_USERNAME:
                return { ...state, userName: action.value, };

			case ActionTypes.UPDATE_FONT_SIZE_PREFERENCE:
                return { ...state, fontSize: action.value, };

            default:
                return state;
        }
    }
}

export default new ControlPanelReduceStore();
