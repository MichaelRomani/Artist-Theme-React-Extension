import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const GLogo = props => {
  return props.logo;
};

const mapState = state => {
  return {
    logo: state.googleLogo
  };
};

export default connect(mapState)(GLogo);
