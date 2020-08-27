import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { connect } from "react-redux";
import { loginRequest } from "../../redux/auth/action";

const onFinishFailed = (errorInfo) => {
  console.log(errorInfo);
};

class Login extends Component {
  state = {
    values: { username: "", password: "", remember: "" },
  };
  onFinish = (values) => {
    if (values.username === "enessahin" || "alibey") {
      this.props.login(values.username, values.password);
      this.setState({ values: values });
    } else {
      alert("Lütfen adminsen gir.");
    }
  };
  render() {
    return (
      <Row justify="center" align="middle">
        <Col span={8}>
          <Form
            span={8}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Lütfen kullanıcı adı giriniz!",
                },
              ]}
            >
              <Input onChange={this.handleChange} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Lütfen şifre girin!",
                },
              ]}
            >
              <Input.Password onChange={this.handleChange} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Beni Hatırla</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Giriş
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loginRequest(username, password)),
});

export default connect(null, mapDispatchToProps)(Login);
