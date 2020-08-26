import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCommunityDetail,
  communityDetailClear,
} from "../../redux/communities/action";
import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import Avatar from "antd/lib/avatar/avatar";

class CommunityDetail extends Component {
  formRef = React.createRef();

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
      createdDate: `${moment(detailCommunity.createdDate).format("lll")}`,
    });
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const { detailCommunity } = this.props;
    return (
      <Form ref={this.formRef} {...formItemLayout}>
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
        </Form.Item>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetail: (payload) => dispatch(getCommunityDetail(payload)),
  clear: () => dispatch(communityDetailClear()),
});

const mapStateToProps = (state) => ({
  detailCommunity: state.communityDetail.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityDetail);
