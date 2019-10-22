import {Button, Col, Form, Icon, Input, Row} from 'antd';
import * as React from 'react';
import 'antd/dist/antd.css';
import '../index.css';

class LoginForm extends React.Component {

    render() {
        return <Row type="flex" justify="center">
            <Col span={6} className="center">
                <Form>
                    <h1 style={{
                        textAlign: 'center',
                        color: '#464646'
                    }}>
                        ĐĂNG NHẬP
                    </h1>
                    <Input
                        style={{marginBottom: 12}}
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <Input
                        style={{marginBottom: 12}}
                        className="form-group"
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button horizontal-center"
                    >
                        Đăng Nhập
                    </Button>

                    <div style={{
                        textAlign: 'center',
                        marginTop: '10px'
                    }}>
                        <a href="#">Đăng Ký Tài Khoản</a>
                    </div>
                </Form>
            </Col>
        </Row>
    }
}

const WrappedLoginForm = Form.create({name: 'normal_login'})(LoginForm);

export default WrappedLoginForm;