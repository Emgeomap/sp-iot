import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.css';
import { Provider } from 'react-redux';
import {MyStore} from '../redux/Store';

render(
    <Provider store={MyStore}>
        <App />
    </Provider>,
    document.getElementById('wrap'));