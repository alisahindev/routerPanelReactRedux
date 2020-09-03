import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Col,
  Row,
  Image,
  Divider,
  Card,
} from "antd";
import { connect } from "react-redux";
import { loginRequest } from "../../redux/auth/action";
import image from "../../components/images/saalla-5.png";

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
      <div className="login-page">
        <Row style={{ height: "100%" }}>
          <Col span={8} offset={8}>
            <Form
              className="login-form"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Divider>Admin Girişi</Divider>
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
                <Button
                  type="primary"
                  className="login-button"
                  htmlType="submit"
                >
                  Giriş
                </Button>
              </Form.Item>
              <a href="http://www.saalla.com" target="_blank">
                <Card cover={<img alt="SAALLA.COM" src={image} />} />
              </a>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loginRequest(username, password)),
});

export default connect(null, mapDispatchToProps)(Login);
