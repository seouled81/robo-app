import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import App from './containers/App';
import {searchRobots, requestRobots } from './reducers';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});

const store = createStore(
  rootReducer,
  applyMiddleware(
    ThunkMiddleware,
    logger
  )
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
