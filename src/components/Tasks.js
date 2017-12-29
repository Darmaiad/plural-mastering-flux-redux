import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Form, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';
import Task from './Task';

const Tasks = props => {
    const tasksClasses = 'fix-top';

    const tasks =
        props.tasks
            .filter(task => props.showComplete ? true : !task.complete)
            .map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onCompleteTask={props.onCompleteTask}
                />
            ));

    const handleSubmit = event => {
        event.preventDefault();
        let newTaskName = event.target.newTask.value;
        if (newTaskName.trim()) {
            props.onCreateTask(newTaskName);
            // It will not work with newTaskName
            event.target.newTask.value = null;
        }
    };

    const handleChange = event => {
        props.onToggleShowTasks(event.target.checked);
    };

    const handleUndo = () => {
        props.onRevertLastState();
    };

    return (
        <Grid className={tasksClasses}>
            <h1>Tasks</h1>
            {tasks}
            <Form inline onSubmit={handleSubmit}>
                <FormGroup>
                    <FormControl type="text" name="newTask" placeholder="Add a new task" />
                </FormGroup>
                {/* JSX strips whitespace between lines, so you we need to manually add spaces */}
                {' '}
                <Button bsStyle="primary" type="submit">Add</Button>
            </Form>
            <br />
            <Button onClick={handleUndo}>Undo Last Change</Button>
            <Checkbox checked={props.showComplete} onChange={handleChange}>
                Show Completed
            </Checkbox>
        </Grid>
    );
};

Tasks.propTypes = {
    onCreateTask: PropTypes.func,
    onToggleShowTasks: PropTypes.func,
    onCompleteTask: PropTypes.func,
    onRevertLastState: PropTypes.func,
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        content: PropTypes.string,
        complete: PropTypes.bool,
    })),
    showComplete: PropTypes.bool,
};

export default Tasks;
