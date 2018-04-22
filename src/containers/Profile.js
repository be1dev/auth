import React from 'react';
import { connect } from "react-redux";
import { fetchProfile } from '../actions/profile';
import Profile from '../components/Profile';

const mapStateToProps = state => {
  return {
    name: state.profile.name,
    error: state.profile.error,
    isLoading: state.profile.isLoading
  };
};
const mapDispatchToProps = {
  fetchProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);