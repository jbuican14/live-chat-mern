import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

export const SignInPage = () => {
  console.log('sign in page');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInErr, setSignInErr] = useState('');
  const history = useHistory();

  const onClickSignIn = async () => {
    try {
      setSignInErr('');
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (e) {
      setSignInErr(e);
    }
  };

  return (
    <div className="full-height-page">
      <div className="centered-container space-before">
        {signInErr ? (
          <div>
            <p className="error-message">{signInErr.message}</p>
          </div>
        ) : null}
        <h2>Sign In</h2>
        <input
          type="email"
          value={email}
          placeholder="Email address"
          className="full-width space-after"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          className="full-width space-after"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="full-width" onClick={onClickSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
};
