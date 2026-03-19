import React, { Component } from 'react';

class CounterApp extends Component {
  // Constructor to initialize state and bind methods
  constructor(props) {
    super(props);
    this.state = {
      count: 0 // Initialize the counter value
    };
    // Binding is necessary for 'this' to work correctly in event handlers
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Method to increment the counter
  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  // Method to decrement the counter
  decrement() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  // The render method is required and returns JSX
  render() {
    return (
      <div>
        <h1>Counter Application</h1>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.increment}>
          Increment
        </button>
        <button onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default CounterApp;
