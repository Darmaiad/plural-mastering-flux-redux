import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

const NoMatch = ({ location }) => (
    <Grid className={'fix-top'}>
        <h3>No match for: <code>{location.pathname}</code></h3>
    </Grid>
);

NoMatch.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

export default NoMatch;
