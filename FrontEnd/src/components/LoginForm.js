import { Form, Icon, Input, Button, Row, Col } from 'antd';
import * as React from 'react';
import 'antd/dist/antd.css';
import '../index.css';

class LoginForm extends React.Component {

  render() {
    return <Row type="flex" justify="center" align="center">
      <Col span={6} className="center">
        <Form >
          <Input
            style={{ marginBottom: 12 }}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="name"
            type="text"
            placeholder="Username"
          />
          <Input
            style={{ marginBottom: 12 }}
            className="form-group"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="password"
            type="password"
            placeholder="Password"
          />

          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button horizontal-center"
          >
            Log in
          </Button>
        </Form>
      </Col>
    </Row>
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedNormalLoginForm;