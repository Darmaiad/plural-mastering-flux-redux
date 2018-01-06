import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ControlPanelContainer from './../containers/ControlPanelContainer';
import TasksContainer from './../containers/TasksContainer';
import AppRedux from './AppRedux';
import NoMatch from './NoMatch';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/controlpanel' component={ControlPanelContainer} />
                <Route path='/tasks' component={TasksContainer} />
                <Route path='/messageboard' component={AppRedux} />
                <Route component={NoMatch} />
            </Switch>
        );
    }
}
