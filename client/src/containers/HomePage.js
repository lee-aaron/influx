import React, { Component } from 'react';
import Home from '../components/Home/Home';
import { connect } from 'react-redux';

class HomePage extends Component {

  render() {
    return <Home />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);