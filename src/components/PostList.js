import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) { 
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) => {
        return <Post 
          whenPostClicked = { props.onPostSelection }
          title={post.title}
          author={post.author}
          content={post.content}
          timePosted={post.timePosted}
          id = {post.id}
          key={post.id} />
  })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;