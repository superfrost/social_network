import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store'

let rerenderIntireTree = (state) => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          store={store}
          // dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderIntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerenderIntireTree(state);
});

serviceWorker.unregister();
