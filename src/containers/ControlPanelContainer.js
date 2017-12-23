import { Container } from 'flux/utils';
import Store from './../flux/stores/ControlPanelReduceStore';
import ControlPanel from './../components/ControlPanel';

function getStores() {
    return [
        Store,
    ];
}

function getState() {
    return Store.getState();
}

export default Container.createFunctional(ControlPanel, getStores, getState);
