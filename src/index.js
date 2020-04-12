import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData1 = [
  {id: 1, name: 'Nick'},
  {id: 2, name: 'Mary'},
  {id: 3, name: 'Den'},
  {id: 4, name: 'Sara'}
]

let messageData1 = [
  {id: 1, message: "Hi. Realy cool weather! Do you wanna go to park?"},
  {id: 2, message: "Hi it's true. Meat me near my house in 15."},
  {id: 3, message: "Ok I'll be there!"},
  {id: 4, message: "Ok. See you 😊"}
]

let posts1 = [
  {id: 1, message: "Hi it's me !!!", like_count: 17},
  {id: 2, message: "Where are you?", like_count: 4},
  {id: 3, message: "Are you kidding me?", like_count: 5}
]

ReactDOM.render(
  <React.StrictMode>
    <App 
      dialogsData={dialogsData1} 
      messageData={messageData1}
      posts={posts1}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
