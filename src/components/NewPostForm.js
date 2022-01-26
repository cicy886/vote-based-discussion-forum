import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Moment from 'moment';

function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      author: event.target.author.value, 
      content: event.target.content.value,
      timePosted: new Moment().format('MM/DD/YYYY HH:mm:ss'),
      id: v4(),
      // timeOpen: new Moment(),
    });
  }

  return (
    <React.Fragment>
     <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Post!" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;