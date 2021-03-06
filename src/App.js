import React from 'react';
import './App.css';
// import Amplify, { API } from 'aws-amplify';
// // import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// // import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
// import awsconfig from './aws-exports';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./Dashboard"
import Home from "./Home"
import Auth from "./Auth"

import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


const App = () => {

      return (
       <div>
        <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
              <Dashboard/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    
    <Link to="/">Home</Link><br/>
    <Link to="/auth">Log in</Link><br/>
    <Link to="/dashboard">Dashboard</Link>
    </Router>
    </div>)
};

export default App;