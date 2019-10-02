import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndexLayout from '../components/Index';
import { getUsers } from '../actions/users';

class Users extends Component {
  render () {
    return <IndexLayout {...this.props} />;
  }
}

const mapStateToProps = state => ({
  users: state.users.records
});

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
