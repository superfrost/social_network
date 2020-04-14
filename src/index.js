import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { addNewPost } from './components/redux/state'
import { BrowserRouter } from 'react-router-dom';

//addNewPost('Bla bla bla bla')
let RerenderInttireDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addNewPost={addNewPost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

RerenderInttireDOM()

serviceWorker.unregister();
