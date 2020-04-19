import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store'
import { Provider } from "react-redux";

let rerenderIntireTree = () => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App
            // state={state}
            store={store}
          />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderIntireTree(store.getState());

store.subscribe( () => {
  rerenderIntireTree();
});

serviceWorker.unregister();
