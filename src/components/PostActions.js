import React from "react";
import "./PostActions.css";
import PropTypes from "prop-types";
import SendIcon from "@mui/icons-material/Send";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function PostActions(props) {
  return (
    <div className="post-actions">
      <div className="notes">{props.notes > 0 && props.notes + " notes"}</div>
      <div className="actions">
        <SendIcon></SendIcon>
        <CommentOutlinedIcon></CommentOutlinedIcon>
        <CachedOutlinedIcon></CachedOutlinedIcon>
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </div>
    </div>
  );
}

PostActions.defaultProps = {
    notes: Math.floor(Math.random() * 100)
};
PostActions.propTypes = {
  notes: PropTypes.number,
};

export default React.memo(PostActions);
