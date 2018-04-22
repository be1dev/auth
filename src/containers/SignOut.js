import React from 'react';
import { connect } from "react-redux";
import { signOutUser } from '../actions/auth';
import SignOut from '../components/SignOut';

const mapDispatchToProps = {
  signOutUser
};

export default connect(null, mapDispatchToProps)(SignOut);