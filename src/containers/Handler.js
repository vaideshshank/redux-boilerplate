import React from "react";

import { User } from "../components/User";
import { Main } from "../components/Main";
// import { dispatch } from "redux";
import { connect } from "react-redux";
import { setName } from "../actions/userActions";

// smart component

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main
          changeUsername={name => {
            this.props.setName(name);
          }}
        />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.userReducer, math: state.mathReducer };
};

const mapDispathToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
