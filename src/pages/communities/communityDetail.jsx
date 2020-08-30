import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCommunityDetail,
  communityDetailClear,
  updateCommunityRequest,
} from "../../redux/communities/action";
import { Form, Input, Button, Col, Row, Divider, Card, Pagination } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import Avatar from "antd/lib/avatar/avatar";

class CommunityDetail extends Component {
  formRef = React.createRef();

  state = {
    minValue: 0,
    maxValue: 2,
  };
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.getDetail(slug);
  }
  componentWillReceiveProps(nextProps) {
    const { detailCommunity } = nextProps;

    this.formRef.current.setFieldsValue({
      name: `${detailCommunity.name}`,
      slug: `${detailCommunity.slug}`,
      description: `${detailCommunity.description}`,
      createdDate: `${moment(detailCommunity.createdDate).format("LLL")}`,
    });
  }

  onFinish = ({ description, name, slug }) => {
    const values = { description, name, slug };
    this.props.updateCommunity(values);
  };

  render() {
    const numEachPage = 2;
    const handleChange = (value) => {
      if (value <= 1) {
        this.setState({
          minValue: 0,
          maxValue: 2,
        });
      } else {
        this.setState({
          minValue: (value - 1) * numEachPage,
          maxValue: value * numEachPage,
        });
      }
    };
    const { Meta } = Card;

    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const {
      detailCommunity: { moderators, members },
    } = this.props;
    const { detailCommunity } = this.props;
    return (
      <>
        <Row>
          <Col
            span={12}
            xs={{ order: 4 }}
            sm={{ order: 3 }}
            md={{ order: 1 }}
            lg={{ order: 2 }}
          >
            <Divider orientation="left">
              Topluluk Bilgisi - {detailCommunity.name}
            </Divider>
            <Form onFinish={this.onFinish} ref={this.formRef} {...layout}>
              <Form.Item key="name" name="name" label="Topluluk Adı">
                <Input placeholder="Topluluk Adı" />
              </Form.Item>
              <Form.Item key="slug" name="slug" label="Topluluk Slug">
                <Input placeholder="Topluluk Slug" />
              </Form.Item>
              <Form.Item key="description" name="description" label="Açıklama">
                <Input.TextArea placeholder="Topluluk açıklaması" />
              </Form.Item>

              <Form.Item
                key="createdDate"
                name="createdDate"
                label="Oluşturulma Tarihi"
              >
                <Input placeholder="Oluşturulma tarihi" />
              </Form.Item>

              <Form.Item key="logoPath" label="Logo">
                <Avatar
                  size={250}
                  src={detailCommunity && detailCommunity.logoPath}
                  icon={<UserOutlined />}
                />
                <Button
                  style={{ marginLeft: "3rem" }}
                  type="primary"
                  htmlType="submit"
                >
                  Güncelle
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col
            span={12}
            xs={{ order: 4 }}
            sm={{ order: 3 }}
            md={{ order: 1 }}
            lg={{ order: 2 }}
          >
            <Divider orientation="left">
              Moderatörler - {detailCommunity.name}
            </Divider>
            <Row gutter={[48, 16]}>
              {moderators &&
                moderators.length > 0 &&
                moderators.map((member) => {
                  return (
                    <Col span={12}>
                      <Card
                        hoverable
                        style={{
                          width: 250,
                          paddingTop: "1rem",
                          borderRadius: "15px",
                        }}
                        cover={
                          <Avatar
                            size={150}
                            alt={member.username}
                            src={member.profileImg}
                          />
                        }
                      >
                        <Meta
                          style={{ textAlign: "center" }}
                          title={member.username}
                        />
                      </Card>
                    </Col>
                  );
                })}
              <Divider orientation="left">
                Üyeler - {detailCommunity.name}
              </Divider>
              {members &&
                members.length > 0 &&
                members
                  .slice(this.state.minValue, this.state.maxValue)
                  .map((member) => {
                    return (
                      <Col span={12}>
                        <Card
                          hoverable
                          style={{
                            width: 250,
                            paddingTop: "1rem",
                            borderRadius: "15px",
                          }}
                          cover={
                            <Avatar
                              size={150}
                              alt={member.username}
                              src={member.profileImg}
                            />
                          }
                        >
                          <Meta
                            style={{ textAlign: "center" }}
                            title={member.username}
                          />
                        </Card>
                      </Col>
                    );
                  })}
              <Divider>
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={2} //default size of page
                  onChange={handleChange}
                  total={
                    members && members.length > 0 && Math.floor(members.length)
                  } //total number of card data available
                />
              </Divider>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetail: (payload) => dispatch(getCommunityDetail(payload)),
  clear: () => dispatch(communityDetailClear()),
  updateCommunity: (payload) => dispatch(updateCommunityRequest(payload)),
});

const mapStateToProps = (state) => ({
  detailCommunity: state.communityDetail.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityDetail);
