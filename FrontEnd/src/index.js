import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import React from 'react';
import * as ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import rootReducer from './reducers/RootReducer';

import apiReducer from './reducers/ApiReducer';

import './index.css';
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import MainPageContainer from "./containers/MainPageContainer";

import GameContainer from './containers/GameContainer';

const reducers = combineReducers({
    root : rootReducer,
    api : apiReducer
});

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/login">
                        <LoginContainer />
                    </Route>
                    <Route path="/register">
                        <RegisterContainer />
                    </Route>
                    <Route path="/game">
                        <GameContainer />
                    </Route>
                    <Route path="/">
                        <MainPageContainer />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));