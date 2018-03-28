import React, { Component } from 'react';
import axios from 'axios';
import { UserFollows, UserNotFollows } from '../presentional/FollowStatus';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { isFollower: false }
  }


  componentDidMount(){
    
    axios.get(`https://api.github.com/users/${this.props.toUser}/following/${this.props.currentUser}`)
      .then(
        response => this.setState({isFollower: response.status === 204})
      )
      .catch(
        error => this.setState({isFollower: error.response.status !== 404})
      )
  }


  render() {
    const isFollower = this.state.isFollower;

    const button = isFollower ? (
      < UserFollows/>
    ):(
      <UserNotFollows />
    );

    return (
      <div>{button}</div>);
  }
}

export default App;
