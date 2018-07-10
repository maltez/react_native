import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './Index';
import { createStore, combineReducers } from 'redux';
import placesReducer from './store/reducers/places';

// Store
const rootReducer = combineReducers({
    places: placesReducer
});
const store = createStore(rootReducer);

// Redux
export default class RNRedux extends Component {
    render() {
        return <Provider store={store}>
            <App />
        </Provider>
    }
}