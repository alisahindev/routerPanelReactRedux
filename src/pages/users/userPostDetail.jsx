import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDetailRequest } from "../../redux/users/action";
import { getUserPostsRequest } from "../../redux/posts/action";
import { List, Avatar } from "antd";
import ImageModal from "../communities/components/imageModal";
import { Link } from "react-router-dom";

class UserPostDetail extends Component {
  state = {
    previewModalVisible: false,
    logoPath: "",
    visible: false,
  };

  handlePreviewModalVisible = (e) => {
    const logoPath = e.target.src;
    this.setState({
      previewModalVisible: !this.state.previewModalVisible,
    });
    this.setState({ logoPath });
  };

  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.getUserDetail(username);
    this.props.getUserPosts(username);
  }
  render() {
    const { userPost, user } = this.props;
    const { previewModalVisible, logoPath } = this.state;
    console.log(userPost, user);
    return (
      <div>
        <div>
          <h1>KULLANICININ GÖNDERİLERİ {userPost.length}</h1>
        </div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 6,
          }}
          dataSource={userPost}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={
                <Avatar
                  style={{ cursor: "pointer" }}
                  onClick={this.handlePreviewModalVisible}
                  size={250}
                  alt="logo"
                  src={
                    item.mediaContentPath
                      ? item.mediaContentPath
                      : "https://upload.wikimedia.org/wikipedia/tr/c/cc/Be%C5%9Fikta%C5%9F_Esports_logo.png"
                  }
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={user.profileImagePath} />}
                title={user.username}
                description={
                  <Link to={`/community/${item.community.slug}`}>
                    {"Konum : " + item.community.name}
                  </Link>
                }
              />
              {item.content}
            </List.Item>
          )}
        />
        <ImageModal
          visible={previewModalVisible}
          imgPath={logoPath}
          title="Gönderi Fotoğrafı"
          onOk={this.handlePreviewModalVisible}
          onCancel={this.handlePreviewModalVisible}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getUserDetail: (payload) => dispatch(getUserDetailRequest(payload)),
  getUserPosts: (payload) => dispatch(getUserPostsRequest(payload)),
});

const mapStateToProps = (state) => ({
  user: state.userDetail.data,
  userPost: state.userPosts.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPostDetail);
