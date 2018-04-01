import React, { Component } from 'react';
import axios from 'axios';

import { UserFollows, UserDoesNotFollow } from '../presentional/FollowStatus';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isFollower: false };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.toUser}/following/${this.props.currentUser}`)
    .then(
      response => this.setState({ isFollower: response.status === 204 })
    )
    .catch(error => {}); 
  }

  render() {
    const isFollower = this.state.isFollower; 
    const userProfile = this.props.toUser === this.props.currentUser;
    let button = '';

    if (!userProfile) {
      button = isFollower ? <UserFollows /> : <UserDoesNotFollow />;
    }

    return <div>{button}</div>;
  }
}

export default App;
