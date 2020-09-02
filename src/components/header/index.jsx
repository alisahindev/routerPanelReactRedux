import React, { useRef } from "react";
import _ from "lodash";
import { Layout, Select } from "antd";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { searchRequest } from "../../redux/search/action";

const { Header } = Layout;

function HeaderWrapper(props) {
  const { Option } = Select;
  const history = useHistory();
  const [userQuery, setUserQuery] = React.useState("");

  const handleSearchChange = (name, obj) => {
    console.log(name, obj);
    if (obj.type) {
      obj.type === "community"
        ? history.push(`/community/${name}`)
        : history.push({
            pathname: "/users",
            state: { name },
          });
    } else {
      return;
    }
  };

  const delayedQuery = useRef(_.debounce((q) => props.search({ text: q }), 500))
    .current;

  const onSearch = (value) => {
    setUserQuery(value);
    delayedQuery(value);
  };

  const options =
    props.searchData &&
    props.searchData.length > 0 &&
    props.searchData.map((d) => (
      <Option type={d.type} value={d.name} key={d.name}>
        {d.name}
      </Option>
    ));

  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, color: "#fff" }}
    >
      <Select
        showSearch
        placeholder="Kullanıcı ve topluluk ara"
        style={{ width: "50%", justifyContent: "center" }}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={onSearch}
        onSelect={handleSearchChange}
      >
        {options}
      </Select>
    </Header>
  );
}

const mapDispatchToProps = (dispatch) => ({
  search: (payload) => dispatch(searchRequest(payload)),
});

const mapStateToProps = (state) => ({
  searchData: state.searching.search,
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper);
