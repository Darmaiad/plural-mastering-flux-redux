'use strict';
import ActionTypes from './../actions/types/MessageBoardTypes';
import defaultState from './../defaultState';

const UserStatusReducer = (state = defaultState.userStatus, {type, value}) => {
    switch (type) {
        case ActionTypes.UPDATE_STATUS:
            return value;
    }
    return state;
};

export default UserStatusReducer;
