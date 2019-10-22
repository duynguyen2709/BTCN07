import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import rootReducer from './reducers/RootReducer';
import apiReducer from './reducers/ApiReducer';

import GameContainer from './containers/GameContainer';
import MainPage from "./components/MainPage";

import './index.css';
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";

const reducers = combineReducers({
    root : rootReducer,
    api : apiReducer
});

const store = createStore(reducers);

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
                        <MainPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));