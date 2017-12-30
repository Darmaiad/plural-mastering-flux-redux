'use strict';
import ActionTypes from './../actions/types/MessageBoardTypes';
import defaultState from './../defaultState';
import ApiStatus from './../ApiStatus';

const ApiCommunicationStatusReducer = (state = defaultState.apiCommunicationStatus, {type}) => {
    switch (type) {
        case ActionTypes.CREATE_NEW_MESSAGE:
            return ApiStatus.WAITING;
        case ActionTypes.NEW_MESSAGE_SERVER_ACCEPTED:
            return ApiStatus.READY;
    }
    return state;
};

export default ApiCommunicationStatusReducer;
