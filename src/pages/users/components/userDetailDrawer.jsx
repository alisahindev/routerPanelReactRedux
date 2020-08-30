import React, { Component } from "react";
import { Drawer, Form, Button, Col, Row, Input, Select } from "antd";
import moment from "moment";
import localization from "moment/locale/tr";

const { Option } = Select;

class UserDetailDrawer extends Component {
  render() {
    const {
      username,
      profileImagePath,
      bio,
      emailAddress,
      createdDate,
      sPoint,
      id,
      gender,
    } = this.props;
    const trDate = moment(createdDate).locale("tr", localization).format("lll");
    return (
      <>
        <Drawer
          title={`Kullanıcı bilgileri : ${username}`}
          width={720}
          onClose={this.props.onClose}
          visible={this.props.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.props.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="username"
                  label="Kullanıcı Adı"
                  initialValue={username}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
                <Form.Item name="id" label="Kullanıcı ID" initialValue={id}>
                  <Input />
                </Form.Item>
                <Form.Item name="bio" label="Biografi" initialValue={bio}>
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name="createdDate"
                  label="Kayıt Tarihi"
                  initialValue={trDate}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name="sPoint"
                  label="Saalla Puanı"
                  initialValue={sPoint}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <img
                  style={{ width: 300, height: 300 }}
                  alt={username}
                  src={
                    profileImagePath
                      ? `https://saallaaccount.blob.core.windows.net/saallacontainer/${profileImagePath}`
                      : "https://upload.wikimedia.org/wikipedia/tr/c/cc/Be%C5%9Fikta%C5%9F_Esports_logo.png"
                  }
                />
                <Form.Item
                  name="emailAdress"
                  label="Email"
                  initialValue={emailAddress}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="gender" label="Cinsiyet" initialValue={gender}>
                  <Select>
                    <Option value="e">E</Option>
                    <Option value="k">K</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}
export default UserDetailDrawer;
