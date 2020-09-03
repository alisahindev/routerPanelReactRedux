import React, { Component } from "react";
import { Table, Button, Col, Row, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import ImageModal from "./components/imageModal";
import {
  getAllCommunitiesRequest,
  createCommunityRequest,
} from "../../redux/communities/action";
import { connect } from "react-redux";
import CreateCommunityModal from "./components/createCommunityModal";
import { Link } from "react-router-dom";

class Communities extends Component {
  state = {
    previewModalVisible: false,
    logoPath: "",
    visible: false,
  };

  componentDidMount() {
    const { getCommunities } = this.props;
    getCommunities();
  }

  handlePreviewModalVisible = (e) => {
    const logoPath = e.target.src;
    this.setState({
      previewModalVisible: !this.state.previewModalVisible,
    });
    this.setState({ logoPath });
  };

  onSubmit = (payload) => {
    this.props.create(payload);

    this.setState({ visible: false });
  };

  render() {
    const {
      communities: { data },
    } = this.props;
    const { previewModalVisible, logoPath } = this.state;
    const columns = [
      {
        title: "Isim",
        dataIndex: "name",
        width: 150,
        key: "name",
        render: (text, data) => (
          <Link to={`/community/${data.slug}`}>{text}</Link>
        ),
      },
      {
        title: "Hakkinda",
        dataIndex: "description",
        width: 500,
        key: "age",
      },
      {
        title: "Slug",
        dataIndex: "slug",
        key: "address",
      },
      {
        title: "Uyeler",
        dataIndex: "memberCount",
        key: "memberCount",
        render: (memberCount) => (
          <span>
            <UserOutlined /> {memberCount}
          </span>
        ),
      },
      {
        title: "Logo",
        key: "logoPath",
        dataIndex: "logoPath",
        render: (logoPath) => (
          <Avatar
            style={{ cursor: "pointer" }}
            onClick={this.handlePreviewModalVisible}
            size={64}
            src={logoPath ? logoPath : "planet.png"}
          />
        ),
      },
    ];

    return (
      <Row gutter={[48, 16]}>
        <Col xs={8} sm={16} md={24}>
          <Divider orientation="right">
            <Button
              style={{ borderRadius: "10px" }}
              type="primary"
              className="table_up_button"
              onClick={() => this.setState({ visible: true })}
            >
              Topluluk Ekle
            </Button>
          </Divider>

          <Table
            columns={columns}
            dataSource={data && data.length > 0 && data}
          />
          <ImageModal
            visible={previewModalVisible}
            imgPath={logoPath}
            title="Topluluk logosu"
            onOk={this.handlePreviewModalVisible}
            onCancel={this.handlePreviewModalVisible}
          />
          <CreateCommunityModal
            title="Topluluk Oluştur"
            onOk={this.onSubmit}
            onCancel={() => this.setState({ visible: false })}
            visible={this.state.visible}
          ></CreateCommunityModal>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCommunities: () => dispatch(getAllCommunitiesRequest()),
  create: (payload) => dispatch(createCommunityRequest(payload)),
});

const mapStateToProps = (state) => ({
  communities: state.allCommunities,
});

export default connect(mapStateToProps, mapDispatchToProps)(Communities);
