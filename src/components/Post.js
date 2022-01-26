import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.title} - {props.author}</h3>
        <p><em>{props.content}</em></p>
        <p><em>{props.timePosted}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  timePosted: PropTypes.string
};

export default Post;