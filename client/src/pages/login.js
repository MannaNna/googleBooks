import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import NavTabL from "../components/navTabL";
import NavTabs from "../components/NavTabs";
import Jumbotron from "../components/jumbotron";
import GoogleContainer from "./googleBooksContainer";
import Saved from "./saved.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../utils/API";
import { Logout } from './logout';




export default class Login extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  }

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userID =  localStorage.getItem('userID');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const picture = localStorage.getItem('picture');
    this.setState({ userID, email, name, picture, isLoggedIn });
  }

  
// Google Response, send user object to DB
  responseGoogle = response => { 
    console.log(response);
      API.updateUser({ 
         userID: response.El,
          name: response.profileObj.name,
          email: response.profileObj.email,
          picture: response.profileObj.imageUrl
       })
   
    return this.signup(response);
  }


 signup(response) {   
      this.setState({
      isLoggedIn: true,
     userID: response.El,
     name: response.profileObj.name,
     email: response.profileObj.email,
     picture: response.profileObj.imageUrl
   });
   localStorage.setItem("userID",response.El);
   localStorage.setItem("name", response.profileObj.name);
   localStorage.setItem("email",  response.profileObj.email);
   localStorage.setItem("picture", response.profileObj.imageUrl);
   localStorage.setItem("response",response);
   localStorage.setItem("isLoggedIn", true);

}

signoutGoogle  = () => {
  this.setState({
  isLoggedIn: false
  })
  console.log("Logout")
 }

 
  render() {
    console.log(this.state.userID)
    let AuthContent;
 
    if (this.state.isLoggedIn) { 
      AuthContent = (     
        <Router>
      <div>
        <NavTabs src={this.state.picture} name={this.state.name} userID={this.state.userID}/>
        <Jumbotron />
        <Switch>
          <Route exact path={`/search/${this.state.userID}`} render={(props) => <GoogleContainer {...props} userID={this.state.userID}/>} />
          <Route exact path={`/saved/:${this.state.userID}`} render={(props) => <Saved {...props} userID={this.state.userID}/>} />
          <GoogleLogout
            clientId='194250480637-a0c99ojc4kgkk7i8i4lta3f3rjr07daa.apps.googleusercontent.com'
            buttonText="Logout"
            onLogoutSuccess={this.signoutGoogle}
            onFailure={this.signoutGoogle}
          >
    </GoogleLogout>
        </Switch>
      </div>
    </Router>
       )
    } else {
      AuthContent = (
        <div >
        
        <div style={{
              marginLeft: '0px',
              marginTop: '0px',
              backgroundColor: "transparent"
            }} >

       
        <div className="container">
          <div className="jumbotron">
            <NavTabL />
            <div style={{
              marginLeft: '420px',
              marginTop: '100px',
              backgroundColor: "transparent"
            }} >
            <GoogleLogin
            clientId={'194250480637-a0c99ojc4kgkk7i8i4lta3f3rjr07daa.apps.googleusercontent.com'}
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            />
            </div>
            </div>
          </div>
         </div>
         <Router>
        <Switch>
          <Route exact path="/search" component={Login} />
          <Route exact path="/saved" component={Login} />
        </Switch>
       </Router>
        </div>
      );
    }
 
    return (
      <div>
        {AuthContent}
      </div>
    )
  }
}