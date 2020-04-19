import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store'
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App
          store={store}
          />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
