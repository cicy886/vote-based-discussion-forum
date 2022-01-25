import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe ('forum post actions', () => {

  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addTicket should create ADD_POST action', () => {
    expect(actions.addPost({title: '2022 is our year!', author: 'Jessie', content: "It can't be as bad as last year, right?", timePosted: '01-22-2022',
    id: 1})).toEqual({
      type: c.ADD_POST,
      title: '2022 is our year!',
      author: 'Jessie',
      content: "It can't be as bad as last year, right?",
      timePosted: '01-22-2022',
      id: 1
    });
  });

})