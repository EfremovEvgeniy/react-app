import React, { Suspense } from "react";
import "./App.scss";
import { Route, withRouter, Redirect, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Loader from "./components/Loader/Loader";
import store from "./redux/redux-store";
const DialogContainer = React.lazy(() =>
  import("./components/Dialogs/DialogContainer")
);

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
              <Route
                path="/dialogs"
                render={() => {
                  return (
                    <Suspense fallback={<Loader />}>
                      <DialogContainer />
                    </Suspense>
                  );
                }}
              ></Route>
              <Route path="/users" render={() => <UsersContainer />} />
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

const MainApp = () => {
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
