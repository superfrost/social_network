import React from 'react';
import { render } from '@testing-library/react';
import profileReduser, { addPost, deletePost } from './profileReduser';

let state = { 
  posts: [{
    id: 2, 
    person_id: 2, 
    date: '2020-05-03 10:00:02', 
    message: 'He said he was not there yesterday', 
    like_count: 0
  }]
};

test('new post should be added', () => {
  // Test data
  let postObj = { id: 1, person_id: 1, date: 2020, message: "Hi", like_count: 0,}
  let action = addPost(postObj)
  // Action
  let newState = profileReduser(state, action)
  // Expectation
  expect(newState.posts.length).toBe(2);
});

test('Post should be deleted', () => {
  // Test data
  let action = deletePost(2)
  // Action
  let newState = profileReduser(state, action)
  // Expectation
  expect(newState.posts.length).toBe(0);
});

test("Post shouldn't be deleted if Id is not correct", () => {
  // Test data
  let action = deletePost(10000)
  // Action
  let newState = profileReduser(state, action)
  // Expectation
  expect(newState.posts.length).toBe(1);
});