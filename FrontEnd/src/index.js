import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import rootReducer from './reducers/RootReducer';
import GameContainer from './containers/GameContainer';
import LoginPage from "./components/LoginForm";
import RegisterPage from "./components/RegisterForm";
import MainPage from "./components/MainPage";

import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
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