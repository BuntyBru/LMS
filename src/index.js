import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import counterReducer from './store/reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    ctr: counterReducer,
});


const logger = store => {

    return next=> {
        return action => {
            console.log("MIDDLE WARE",action);
            const result = next(action);
            console.log("After next action",store.getState())
            return result;

        }
    }

};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
