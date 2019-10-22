import React from 'react';
import LoginPage from "../components/LoginForm";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(username, password){
        console.log(username);
        console.log(password);
    }

    render() {
        return <LoginPage errorText="test" onClickLogin={this.handleLogin}/>
    }
}

export default LoginContainer;