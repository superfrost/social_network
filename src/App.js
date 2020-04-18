import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
  debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.navbar} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <DialogsContainer
            store={props.store}
            state={props.state.messagePage}
            //dispatch={props.dispatch}
            // addNewMessage={props.addNewMessage}
            // newMessageTextOnChange={props.newMessageTextOnChange}
          />}
        />
        <Route
          path="/profile"
          render={() => <Profile
            store={props.store}
            state={props.state.profilePage}
            // dispatch={props.dispatch}
          />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
