import React from "react";
import "./App.scss";
import { Route, withRouter, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Loader from "./components/Loader/Loader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <main>
            <div className="content">
              <Route exact path="/">
                <Redirect to="/profile" />
              </Route>
              <Route path="/login" render={() => <Login />} />
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={() => <DialogContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/settings" render={() => <Settings />} />
            </div>
          </main>
        </div>
      );
    }
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);
