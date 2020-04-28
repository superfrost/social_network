import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileCotainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
  //debugger;
  let state = props.store.getState()

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar 
        state={state.navbar} 
      />
      <div className="app-wrapper-content">
        <Route path="/dialogs"
          render={() => <DialogsContainer/>}/>
        <Route path="/profile/:user_id?"
          render={() => <ProfileCotainer
            state={state.profilePage}
          />}
        />
        <Route path='/users'
          render={() => <UsersContainer/>}/>
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path='/login'
          render={() => <Login/>}/>
      </div>
    </div>
  );
};

export default App;
