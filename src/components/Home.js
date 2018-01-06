import React from 'react';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Grid className={'fix-top'}>
            <h1>Welcome to the Flux-Redux Productivity App!</h1>
            <ListGroup>
                <ListGroupItem><Link to='/controlpanel'>Control Panel</Link></ListGroupItem>
                <ListGroupItem><Link to='/tasks'>Tasks</Link></ListGroupItem>
                <ListGroupItem><Link to='/messageboard'>Message Board</Link></ListGroupItem>
            </ListGroup>
        </Grid>
    );
};

export default Home;
