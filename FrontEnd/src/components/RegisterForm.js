import {Button, Col, Form, Icon, Input, Row} from 'antd';
import * as React from 'react';
import 'antd/dist/antd.css';
import '../index.css';

class RegisterForm extends React.Component {

    render() {
        return <Row type="flex" justify="center">
            <Col span={6} className="center">
                <Form>
                    <h1 style={{
                        textAlign: 'center',
                        color: '#464646'
                    }}>
                        ĐĂNG KÝ TÀI KHOẢN
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
                    <Input
                        style={{marginBottom: 12}}
                        className="form-group"
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Retype Password"
                    />
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button horizontal-center"
                    >
                        Đăng Ký
                    </Button>

                    <div style={{
                        textAlign: 'center',
                        marginTop: '10px'
                    }}>
                        <a href="#">Quay Lại Trang Đăng Nhập</a>
                    </div>
                </Form>
            </Col>
        </Row>
    }
}

const WrappedRegisterForm = Form.create({name: 'normal_register'})(RegisterForm);

export default WrappedRegisterForm;