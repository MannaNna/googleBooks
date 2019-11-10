import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Logout from "./pages/logout"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
      
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/Search" component={GoogleContainer} />
          <Route exact path="/Saved" component={Saved} /> */}
          {/* <Route exact path="/" component={Logout}/> */}
        </Switch>
      </div>
    </Router>
  ) ;
}

export default App;

