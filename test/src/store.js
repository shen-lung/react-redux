import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const configureStore = ({reducer, initialState}) => (
    createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    )
);

export default configureStore;
