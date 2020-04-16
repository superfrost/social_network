import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import "./index.css";
import App from "./App";
import state, { subscribe } from './redux/state'
import { addNewPost, newPostTextOnChenge, addNewMessageOnChange } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import { addNewMessage } from "./redux/state";


let rerenderInttireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addNewPost={addNewPost}
          addNewMessage={addNewMessage}
          newPostTextOnChenge={newPostTextOnChenge}
          addNewMessageOnChange={addNewMessageOnChange}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderInttireTree(state);

subscribe(rerenderInttireTree);

serviceWorker.unregister();
