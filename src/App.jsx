import React from "react";
import "./App.scss";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main>
          <div className="content">
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>
            <Route path="/profile" render={() => <ProfileContainer />} />
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
