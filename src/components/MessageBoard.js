import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Form, FormGroup, FormControl, Button, Well } from 'react-bootstrap';
import Status from './../redux/Status';
import ApiStatus from './../redux/ApiStatus';


const MessageBoard = ({ messages, userStatus, apiCommunicationStatus, onNewMessage, onUserStatusChange }) => {
    const controlPanelClasses = 'fix-top';

    const handleUserStatusChange = event => {
        onUserStatusChange(event);
    };

    const handleSubmit = event => {
        event.preventDefault();
        let newMessageName = event.target.newMessage.value.trim();

        if (newMessageName) {
            onNewMessage(newMessageName);
            event.target.newMessage.value = null;
        }
    };

    const formattedMessages = messages
        .sort((a, b) => b.date - a.date)
        .map(message => (
            <div key={message.date}>
                {message.postedBy} : {message.content}
            </div>
        ));

    return (
        <Grid className={controlPanelClasses}>
            <h1>Message Board</h1>
            <Well bsSize="large">{formattedMessages}</Well>
            <Form onSubmit={handleSubmit} inline>
                <fieldset disabled={userStatus === Status.OFFLINE || apiCommunicationStatus === ApiStatus.WAITING}>
                    <FormGroup>
                        <FormControl type="text" name="newMessage" placeholder="Type a New Message" />
                    </FormGroup>
                    {' '}
                    <Button bsStyle="primary" type="submit" >Say Something</Button>
                </fieldset>
            </Form>
            <br />
            <Form inline>
                <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" onChange={handleUserStatusChange} >
                        <option value="ONLINE">Online</option>
                        <option value="AWAY">Away</option>
                        <option value="BUSY">Busy</option>
                        <option value="OFFLINE">Offline</option>
                    </FormControl>
                </FormGroup>
            </Form>
        </Grid>
    );
};

MessageBoard.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.date,
        postedBy: PropTypes.string,
        content: PropTypes.string,
    })),
    userStatus: PropTypes.string,
    apiCommunicationStatus: PropTypes.string,
    onUserStatusChange: PropTypes.func,
    onNewMessage: PropTypes.func,
};

export default MessageBoard;
