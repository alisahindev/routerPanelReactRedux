import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

class DashboardListComponent extends Component {
  state = { data: [] };

  componentWillReceiveProps(nextprops, nextState) {
    this.setState({ data: nextprops.communities });
  }
  render() {
    const { data } = this.state;
    const columns = [
      {
        title: "Topluluk İsmi",
        dataIndex: "name",
        render: (text, data) => (
          <Link to={`/communities/${data.slug}`}>{data.name}</Link>
        ),
      },
    ];

    return (
      <Table
        pagination={{ pageSize: 5 }}
        columns={columns}
        dataSource={data && data.length > 0 && data}
      />
    );
  }
}
export default DashboardListComponent;
