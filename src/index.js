import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from "react-redux";
import rootReduser from "./store/redusers/rootReduser";
import thunk from "redux-thunk";


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    rootReduser,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

)


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
