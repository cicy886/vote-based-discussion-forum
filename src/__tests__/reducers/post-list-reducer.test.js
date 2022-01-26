import postListReducer from '../../reducers/post-list-reducer';
import * as c from './../../actions/ActionTypes';


describe('postListReducer', () => {

  const currentState = {
    1: {title: '2022 is our year!',
    author: 'Jessie',
    content: "It can't be as bad as last year, right?",
    timePosted: '01-22-2022',
    id: 1},
    2: {title: 'I am hungry',
    author: 'Jason',
    content: 'What should I eat tonight?',
    timePosted: '01-23-2022',
    id: 2}
  }

  let action; 
  const postData = {
    title: '2022 is our year!',
    author: 'Jessie',
    content: "It can't be as bad as last year, right?",
    timePosted: '01-22-2022',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { title, author, content, timePosted, id } = postData;
    action = {
      type: c.ADD_POST,
      title: title,
      author: author,
      content: content,
      timePosted: timePosted,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        author: author,
        content: content,
        timePosted: timePosted,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () =>
  {
    action = {
      type: c.DELETE_POST,
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {title: 'I am hungry',
    author: 'Jason',
    content: 'What should I eat tonight?',
    timePosted: '01-23-2022',
    id: 2}
    });
  });
});