import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {hashRouter} from 'react-router-dom'
import App from './App';
import './index.css';

//todo
// let store = createStore();

ReactDOM.render(
    <hashRouter>
        <App />
    </hashRouter>,
    document.getElementById('root')
)
