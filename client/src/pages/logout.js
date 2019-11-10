import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import API from "../utils/API";


export default class Logout extends Component {

    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
      }

      componentDidMount () {
        console.log(this.props.userID + ' logout')
    }
    

    
      
    // Google Response, send user object to DB
      responseGoogle = response => { 
        
          API.updateUser({ 
             userID: "",
              name: "",
              email: "",
              picture: ""
           })
       
        return this.sigsignup(response);
      }
    
    
     signup(response) {   
          this.setState({
          isLoggedIn: false,
         userID: "",
         name: "",
         email: "",
         picture: ""
       });
    }



render() {
    console.log(this.state.userID)
    console.log("this is the logout page!!!")
    let AuthContent;
 
    if (this.state.isLoggedIn) { 
      AuthContent = (     
        <Router>
      <div>
        
       <h2>Still Logged in!</h2>
      </div>
    </Router>
       )
    } else {
      AuthContent = (
        <div >
        <h2>Logged Out.</h2>
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