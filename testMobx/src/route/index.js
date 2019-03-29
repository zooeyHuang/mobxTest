import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import { Route,Router,Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import store from '../store/index';
import MainRoute from './MainRoute';
import TestPage from '../pages/TestPage';

const history = createHistory();

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider {...store}>
                <Router history={history}>
                    <Switch>
                        <Route path='/test' component={TestPage} />
                        <Route path='/' component={MainRoute} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App