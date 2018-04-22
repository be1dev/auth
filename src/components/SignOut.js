import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignOut extends Component {
  state = {
    redirect: false
  }
  componentWillMount() {
    this.props.signOutUser();
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    return
  }
}

export default SignOut