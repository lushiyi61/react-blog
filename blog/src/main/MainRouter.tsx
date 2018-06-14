import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import { Route, Router, Switch } from 'react-router';


import { Root } from '../Root';
import App from './App';

const browserHistory = createBrowserHistory();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routerStore);
const rootStore = {
    router: routerStore
};


class MainRouter extends React.Component {
    // constructor() {
    //     super({});
    //     console.log('MainRouter constructor');
    // }
    public render() {
        return (
            <Provider {...rootStore}>
                <Root>
                    <Router history={history}>
                        <Switch>
                            <Route path="/" component={App} />
                        </Switch>
                    </Router>
                </Root>
            </Provider>
        );
    }
}

export default MainRouter;




