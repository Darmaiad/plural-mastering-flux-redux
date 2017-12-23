'use strict';
import React from 'react';
import { Grid, ControlLabel, FormControl, FormGroup, Radio } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ControlPanel extends React.Component {
    render() {
        return (
            <Grid className={'fix-top'}>
                <h1>Control Panel</h1>
                <p>
                    Welcome, <span> Jim!</span>
                </p>

                <form>
                    <FormGroup>
                        <input type="text" className="form-control" placeholder="Update Your Username" />
                    </FormGroup>
                </form>
                <form >
                    <FormGroup>
                        <ControlLabel>Font size</ControlLabel>
                        <Radio type="radio" name="fontSize" value="large">Large</Radio>
                        <Radio type="radio" name="fontSize" value="small" checked>Small</Radio>
                    </FormGroup>
                </form>
            </Grid>
        );
    }
}
