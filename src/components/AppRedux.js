import React from 'react';
import { Provider } from 'react-redux';
import MessageBoardContainer from './../containers/MessageBoardContainer';
import Store from './../redux/Store';

// A wrapper component to pass the store to the Message board Container
// and subsribe it to the Store changes
const AppRedux = () => {
    return (
        <Provider store={Store} >
            <MessageBoardContainer />
        </Provider>
    );
};

export default AppRedux;
