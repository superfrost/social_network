import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addNewPost, newPostTextOnChenge } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import { addNewMessage } from "./redux/state";


export let rerenderInttireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addNewPost={addNewPost}
          addNewMessage={addNewMessage}
          newPostTextOnChenge={newPostTextOnChenge}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
