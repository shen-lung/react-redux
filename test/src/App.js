import React, { Component } from 'react';
import {Provider} from 'react-redux';

import reducer from './reducers';
import configureStore from './store';

import TitleIndexConnected from './containers/TitleIndexConnected';

class App extends Component {
    constructor(props) {
        super(props);

        this._store = configureStore({
            reducer,
            initialState: {}
        });
    }

    render() {
        return (
            <div>
                <Provider store={this._store}>
                    <TitleIndexConnected />
                </Provider>
            </div>
        );
    }
}

export default App;
