import React from 'react';
import RegisterForm from '../components/RegisterForm';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(username, password, retype){
        console.log(username);
        console.log(password);
        console.log(retype);
    }

    render() {
        return <RegisterForm errorText="test" onClickRegister={this.handleRegister}/>
    }
}

export default RegisterContainer;