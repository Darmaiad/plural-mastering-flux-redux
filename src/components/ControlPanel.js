import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ControlLabel, FormGroup, FormControl, Radio } from 'react-bootstrap';

const ControlPanel = props => {
    const handleNameChange = event => {
        props.onNameChange(event.target.value);
    };

    const handleFontSizeChange = event => {
        props.onFontSizeChange(event.target.value);
    };

    const controlPanelClasses = 'fix-top';

    const controlPanelStyles = {
        fontSize: props.controlPanel.fontSize === 'small' ? '16px' : '24px',
    };

    return (
        <Grid className={controlPanelClasses} style={controlPanelStyles}>
            <h1>Control Panel</h1>
            <p>
                Welcome, <span>{props.controlPanel.userName}</span>
            </p>

            <FormGroup>
                <FormControl
                    type="text"
                    placeholder="Update Your Username"
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup>
                <ControlLabel>Font size</ControlLabel>
                <Radio
                    type="radio"
                    value="large"
                    checked={props.controlPanel.fontSize === 'large'}
                    onChange={handleFontSizeChange}
                >
                    Large
                </Radio>
                <Radio
                    type="radio"
                    value="small"
                    checked={props.controlPanel.fontSize === 'small'}
                    onChange={handleFontSizeChange}
                >
                    Small
                </Radio>
            </FormGroup>
        </Grid>
    );
};

ControlPanel.propTypes = {
    onNameChange: PropTypes.func,
    onFontSizeChange: PropTypes.func,
    controlPanel: PropTypes.shape({
        userName: PropTypes.string,
        fontSize: PropTypes.string,
    }),
};

export default ControlPanel;
