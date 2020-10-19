import React from "react";
import "./App.scss";
import { Route, withRouter, Redirect, BrowserRouter } from "react-router-dom";
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
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Loader from "./components/Loader/Loader";
import store from "./redux/redux-store";

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

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);

const MainApp = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </Provider>
  );
};

export default MainApp;
