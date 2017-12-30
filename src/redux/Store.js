'use strict';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import UserStatusReducer from './reducers/UserStatusReducer';
import MessagesReducer from './reducers/MessagesReducer';
import ApiCommunicationStatusReducer from './reducers/ApiCommunicationStatusReducer';

const combinedReducer = combineReducers({
    userStatus: UserStatusReducer,
    messages: MessagesReducer,
    apiCommunicationStatus: ApiCommunicationStatusReducer,
});

const Store = createStore(combinedReducer, applyMiddleware(logger));

export default Store;

