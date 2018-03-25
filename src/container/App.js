import React, { Component } from 'react';
import axios from 'axios';
import { UserFollows, UserNotFollows } from '../presentional/Follow';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { isFollower: false }
  }


  componentDidMount(){
    console.log(this.props.user);
    axios.get(`https://api.github.com/users/${this.props.user}/following/FannyVieira`)
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
