import { connect } from 'react-redux';
import Actions from './../redux/actions/creators/MessageBoardActions';
import MessageBoard from './../components/MessageBoard';

const mapStateToProps = state => ({
    userStatus: state.userStatus,
    messages: state.messages,
    apiCommunicationStatus: state.apiCommunicationStatus,
});

const mapDispatchToProps = dispatch => ({
    onUserStatusChange: e => {
        dispatch(Actions.statusUpdate(e.target.value));
    },
    onNewMessage: messageContent => {
        const username = localStorage['preferences'] ? JSON.parse(localStorage['preferences']).userName : 'Klaniol';
        dispatch(Actions.newMessage(messageContent, username));
    },
});

const MessageBoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageBoard);

export default MessageBoardContainer;
