import * as c from './../actions/ActionTypes';

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
export const addPost = (post) => {
  const { title, author, content, id, timePosted } = post;
  return {
    type: c.ADD_POST,
    title: title,
    author: author,
    content: content,
    id: id,
    timePosted: timePosted
  }
}
