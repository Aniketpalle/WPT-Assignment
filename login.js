import React, { Component } from 'react'; // 1. Added React import

export default class Login extends Component {
  constructor() {
    super();
  
   this.btnHandler = this.btnHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
  }

  btnHandler() {
    console.log("btn handler is called");
  }

  textHandler(e) {
    console.log("text handler is called");
    console.log(e.target.value)
    this.msg=e.target.value

  }

  render() {
    
    return (
      <div>
        <p>login form</p>
        <input type="text" onChange={this.textHandler} ></input>
        <button type="button" onClick={this.btnHandler}>
          login
        </button>
        <p>data{this.msg}</p>
      </div>
    );
  }
}
