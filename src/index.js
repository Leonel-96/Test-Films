import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './components/App'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);



ReactDOM.render(
                <Provider store={store}>
                    <App/>
                </Provider>,document.getElementById('root'));
