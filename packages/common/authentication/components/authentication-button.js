import React from 'react';
import twitterSignIn from '../sign-in';

export default function AuthenticationButton() {
  const [user, setUser] = React.useState({});

  return <button onClick={() => twitterSignIn()}>Sign In</button>;
}
