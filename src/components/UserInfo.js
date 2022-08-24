import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import "./UserInfo.css"

function UserInfo(props) {
  return (
    <div className="user-info">
      <img className="user-image" src={props.userImage} />
      <h4>{props.userName}</h4>
      <Button variant="primary">Follow</Button>
    </div>
  );
}

UserInfo.defaultProps = {
  userName: "Guest",
  userImage:
    "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745",
};
UserInfo.propTypes = {
  userName: PropTypes.string,
};
export default React.memo(UserInfo);
