import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './redux/state'

let rerenderIntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderIntireTree(store.getState());

store.subscribe(rerenderIntireTree);

serviceWorker.unregister();
