import React from 'react';
import { render } from '@testing-library/react';
import dialogsReduser, { addMessage } from './dialogsReduser';

test('length off should be incremented', () => {
  // Test data
  let action = addMessage("Hi is't new message!")
  let state = {
    messageData: [
      {id: 1, person_id: 2, date: '10-04-2020 18:52', message: "Hi. Realy cool weather! Do you wanna go to park?"},
      {id: 2, person_id: 1, date: '09-04-2020 17:37', message: "Hi it's true. Meat me near my house in 15."},
      {id: 3, person_id: 2, date: '08-04-2020 16:22', message: "Ok I'll be there!"},
    ],
  };
  // Action
  let newState = dialogsReduser(state, action)
  // Expectation
  expect(newState.messageData.length).toBe(4);
});
