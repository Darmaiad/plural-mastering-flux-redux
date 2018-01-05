import React from 'react';
import { Grid, Form, FormGroup, FormControl, Button, Well } from 'react-bootstrap';

const MessageBoard = props => {
    const controlPanelClasses = 'fix-top';

    return (
        <Grid className={controlPanelClasses}>
            <h1>Message Board</h1>
            <Well bsSize="large"></Well>
            <Form inline>
                <FormGroup>
                    <FormControl type="text" placeholder="Type a New Message" />
                </FormGroup>
                {' '}
                <Button bsStyle="primary" type="submit">Say Something</Button>
            </Form>
            <br/>
            <Form inline>
                <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" >
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

export default MessageBoard;
