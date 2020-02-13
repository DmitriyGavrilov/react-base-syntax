import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


export default class App extends Component {

  state = {
    username: 'Jack'
  };

  changedInput = ({ target }) => {
    this.setState({
      username: target.value
    })
  };

  render() {

    const styleForH1 = {
      border: '1px solid #ccc',
      padding: '10px'
    };

    return (
      <div className="App">
        <h1 style={styleForH1}>Base Syntax</h1>
        <UserInput 
          changed={this.changedInput} 
          username={this.state.username} />
        <UserOutput 
          username={this.state.username} />
      </div>
    );
  }
};