import React from 'react'

import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import {
  Link
} from "react-router-dom";

Amplify.configure(awsconfig);

export default function Auth() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  return (
    <div>
      {authState === AuthState.SignedIn && user ? (
      <div className="App">
          <div>Hello, {JSON.stringify(user.attributes.name)}, you're logged in</div>
          <AmplifySignOut />
      </div>
    ) : (
      <AmplifyAuthenticator />)}<br/>
    </div>
  )
}
