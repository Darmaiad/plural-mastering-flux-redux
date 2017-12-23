'use strict';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ControlPanel from './ControlPanel';
import Tasks from './Tasks';
import MessageBoard from './MessageBoard';
import NoMatch from './NoMatch';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/controlpanel' component={ControlPanel} />
                <Route path='/tasks' component={Tasks} />
                <Route path='/messageboard' component={MessageBoard} />
                <Route component={NoMatch} />
            </Switch>
        );
    }
}
