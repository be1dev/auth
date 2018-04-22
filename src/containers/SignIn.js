import React from 'react';
import { connect } from "react-redux";
import { signInUser } from '../actions/auth';
import SignIn from '../components/SignIn';

const mapDispatchToProps = {
  signInUser
};

export default connect(null, mapDispatchToProps)(SignIn);