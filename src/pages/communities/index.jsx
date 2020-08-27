import React, { Component } from "react";
import { Table, Button } from "antd";
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
            src={logoPath}
          />
        ),
      },
    ];

    return (
      <>
        <div>
          <Button
            type="primary"
            className="table_up_button"
            onClick={() => this.setState({ visible: true })}
          >
            Topluluk Ekle
          </Button>
        </div>
        <Table columns={columns} dataSource={data && data.length > 0 && data} />
        <ImageModal
          visible={previewModalVisible}
          imgPath={logoPath}
          title="Topluluk logosu"
          onOk={this.handlePreviewModalVisible}
          onCancel={this.handlePreviewModalVisible}
        />
        <CreateCommunityModal
          title="Topluluk Olustur"
          onOk={this.onSubmit}
          onCancel={() => this.setState({ visible: false })}
          visible={this.state.visible}
        ></CreateCommunityModal>
      </>
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
