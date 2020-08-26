import { notification } from "antd";
import PropTypes from "prop-types";

function AlertNotify(message, description, type) {
  notification[type]({
    message,
    description,
  });
}
AlertNotify.propTypes = {
  message: PropTypes.string,
  description: PropTypes.string,
};
AlertNotify.defaultProps = {
  message: "Bilgi Gönderilmedi",
  description: "Bilgi Gönderilmedi",
};
export default AlertNotify;
