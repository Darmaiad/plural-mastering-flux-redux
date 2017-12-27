import { Container } from 'flux/utils';
import Store from './../flux/stores/ControlPanelReduceStore';
import ControlPanel from './../components/ControlPanel';
import Actions from './../flux/actions/creators/ControlPanelActions';

const getStores = () => {
    return [
        Store,
    ];
};

const getState = () => {
    return {
        controlPanel: Store.getState(),
        onNameChange: Actions.userNameUpdate,
        onFontSizeChange: Actions.fontSizePreferenceUpdate,
    };
};

export default Container.createFunctional(ControlPanel, getStores, getState);
