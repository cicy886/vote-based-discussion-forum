import postListReducer from '../../reducers/post-list-reducer';
import * as c from './../../actions/ActionTypes';


describe('postListReducer', () => {

  // const currentState = {
  //   1: {title: '2022 is our year!',
  //   author: 'Jessie',
  //   content: "It can't be as bad as last year, right?",
  //   timePosted: '01-22-2022',
  //   id: 1}
  // }

  let action; 
  const postData = {
    title: '2022 is our year!',
    author: 'Jessie',
    content: "It can't be as bad as last year, right?",
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { title, author, content, id } = postData;
    action = {
      type: c.ADD_POST,
      title: title,
      author: author,
      content: content,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        author: author,
        content: content,
        id: id
      }
    });
  });
});