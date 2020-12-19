import React from "react";
import decoder from "jwt-decode";
import { connect } from "react-redux";
import Home from "./Home/Home";

class App extends React.Component {
  /* <Switch>
          <Route
            path="/"
            exact
            component={LoginScreen}
          />
          {!token.user && (
            <Redirect
              from="*"
              to={
                localStorage.getItem("token")
                  ? `/schedule`
                  : `/`
              }
            />
          )}
          <Route
            path="/schedule"
            exact
            component={Business}
          />
        </Switch> */
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  render() {
    let token = false;
    let employeeToken = false;
    let adminToken = false;

    if (localStorage.getItem("token")) {
      token = decoder(localStorage.getItem("token"));
    }


    return (
      <Home />

    );
  }
}


export default App;
