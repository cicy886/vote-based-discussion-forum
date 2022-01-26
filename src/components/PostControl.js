import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail'
import PropTypes from "prop-types";
import * as a from './../actions';
import EditPostForm from './EditPostForm';

class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const editedMainPostList = this.state.mainPostList
      .filter(post => post.id !== this.state.selectedPost.id)
      .concat(postToEdit);
    this.setState({
        mainPostList: editedMainPostList,
        editing: false,
        selectedPost: null
      });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditPostForm 
      
      post = {this.state.selectedPost} 
      onEditPost = {this.handleEditingPostInList}/>
      buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail 
      post = {this.state.selectedPost} 
      onClickingDelete = {this.handleDeletingTicket}
      onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Post List";

          } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.state.mainPostList} onPostSelection={this.handleChangingSelectedPost} />;
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default PostControl;