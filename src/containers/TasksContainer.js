import { Container } from 'flux/utils';
import Store from './../flux/stores/TasksReduceStore';
import Tasks from './../components/Tasks';
import Actions from './../flux/actions/creators/TasksActions';

const getStores = () => ([
    Store,
]);

const getState = () => {
    let state = {...Store.getState()};
    state.onCreateTask = Actions.createTask;
    state.onToggleShowTasks = Actions.showTasks;
    state.onCompleteTask = Actions.completeTask;
    state.onRevertLastState = Actions.revertLastState; 
    return state;
};

export default Container.createFunctional(Tasks, getStores, getState);
