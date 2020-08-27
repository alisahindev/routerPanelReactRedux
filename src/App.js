import React from "react";
import { Router } from "react-router-dom";
import "antd/dist/antd.css";
import history from "./history";
import Routes from "./routes/index";
import moment from "moment";

moment.locale("tr");

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
