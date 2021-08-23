import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import PrivateRoute from "./PrivateRoute";
import HomeComponent from "./components/HomeComponent";
import Login from "./components/Login";

import {userLogin, userLogout} from "./actions";

class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <PrivateRoute path="/home" isAuthenticated={this.props.isLoggedIn}>
                <HomeComponent/>
            </PrivateRoute>
              <Route path="/login">
                  <Login/>
              </Route>
          </Switch>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = () => {
    return {
        userLogin, userLogout
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(App);

