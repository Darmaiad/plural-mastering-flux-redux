'use strict';
import ActionTypes from './../actions/types/MessageBoardTypes';
import defaultState from './../defaultState';

const MessagesReducer = (state = defaultState.messages, {type, value, postedBy, date})=>{
    switch (type) {
        case ActionTypes.CREATE_NEW_MESSAGE:
            const newState = [{ date: date, postedBy, content: value }, ...state];
            return newState;
    }
    return state;
};

export default MessagesReducer;


