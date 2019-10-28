import React from "react";

import { User } from "./User";
import { Main } from "./Main";
// import { dispatch } from "redux";
import { connect } from "react-redux";

class App extends React.Component {
  changeUsername(newName) {
    this.setState({
      username: newName
    });
  }

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
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
