import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormGroup } from 'react-bootstrap';

const Task = props => {
    const handleChange = event => {
        props.onCompleteTask(props.task.id, event.target.checked);
    };

    return (
        <FormGroup>
            <Checkbox checked={props.task.complete} onChange={handleChange}>
                {props.task.content}
            </Checkbox>
        </FormGroup>
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        content: PropTypes.string,
        complete: PropTypes.bool,
    }),
    onCompleteTask: PropTypes.func,
};

export default Task;
