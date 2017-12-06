
// App
// ============
// All of JS is organised from here

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import items from '../store/reducers';
import ListOfThings from '../components/ListOfThings/ListOfThings';

let store = createStore(items);

ReactDOM.render(
    <Provider store={store}>
        <ListOfThings />
    </Provider>
    , document.querySelector('#app'));
