import {Switch, Route} from "react-router-dom";
import React from 'react';
import LoginPage from '../components/LoginForm';
import RegisterPage from '../components/RegisterForm';
import GameContainer from '../containers/GameContainer';
import MainPage from '../components/MainPage';

export default function MainRoute() {
    return (
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
    );
}