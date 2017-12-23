import ActionTypes from './../types/ControlPanelActionTypes';
import Dispatcher from './../../ProductivityDispatcher';

const ControlPanelActions = {
    userNameUpdate(name) {
        Dispatcher.dispatch({
            type: ActionTypes.UPDATE_USERNAME,
            value: name,
        });
    },

    fontSizePreferenceUpdate(size) {
        Dispatcher.dispatch({
            type: ActionTypes.UPDATE_FONT_SIZE_PREFERENCE,
            value: size,
        });
    },
};

export default ControlPanelActions;
