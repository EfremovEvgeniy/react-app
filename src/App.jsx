import React from "react";
import "./App.scss";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.navbar} />
        <main>
          <div className="content">
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>
            <Route
              path="/profile"
              render={() => (
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              )}
            />
            <Route
              exact
              path="/dialogs"
              render={() => (
                <Dialogs
                  state={props.state.dialogsPage}
                  state={props.state.dialogsPage}
                />
              )}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
