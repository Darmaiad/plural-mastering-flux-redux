import React from 'react';
import { Grid, ControlLabel, FormGroup, Radio } from 'react-bootstrap';

const ControlPanel = props => {
    const handleNameChange = event => {
        // Actions.userNameUpdate(event.target.value);
        props.onNameChange(event.target.value);
    };

    const handleFontSizeChange = event => {
        // Actions.fontSizePreferenceUpdate(event.target.value);
        props.onFontSizeChange(event.target.value);
    };

    const controlPanelClasses = 'fix-top';

    const controlPanelStyles = {
        fontSize: props.controlPanel.fontSize === 'small' ? '16px' : '24px',
    };

    return ( // TODO: PROP types TODO: Local storage
        <Grid className={controlPanelClasses} style={controlPanelStyles}>
            <h1>Control Panel</h1>
            <p>
                Welcome, <span>{props.controlPanel.userName}</span>
            </p>

            <FormGroup>
                <input
                    type="text"
                    className="form-control"
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

export default ControlPanel;
