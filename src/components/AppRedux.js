import React from 'react';
import { Provider } from 'react-redux';
import MessageBoardContainer from './../containers/MessageBoardContainer';
import Store from './../redux/Store';

// export default class AppRedux extends React.Component {
const AppRedux = () => {
    return (
        <Provider store={Store} >
            <MessageBoardContainer />
        </Provider>
    );
};

export default AppRedux;
