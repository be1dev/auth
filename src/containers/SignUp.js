import React from 'react';
import { connect } from "react-redux";
import { signUpUser } from '../actions/auth';
import SignUp from '../components/SignUp';

const mapDispatchToProps = {
  signUpUser
};

export default connect(null, mapDispatchToProps)(SignUp);