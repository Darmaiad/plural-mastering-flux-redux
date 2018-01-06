import ActionTypes from './../types/MessageBoardTypes';
import { get } from './../../../http';
import Store from './../../Store';

const MessageBoardActions = {
    statusUpdate(value) {
        return {
            type: ActionTypes.UPDATE_STATUS,
            value,
        };
    },

    newMessage(content, postedBy) {
        const date = new Date();

        get('/api/create', (id => {
            Store.dispatch({
                type: ActionTypes.NEW_MESSAGE_SERVER_ACCEPTED,
                value: content,
                postedBy,
                date,
                id,
            });
        }));

        return {
            type: ActionTypes.CREATE_NEW_MESSAGE,
            value: content,
            postedBy,
            date,
        };
    },
};

export default MessageBoardActions;
