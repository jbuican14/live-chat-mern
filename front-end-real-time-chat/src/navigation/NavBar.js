import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

export const NavBar = ({ user }) => {
  const onClickSignOut = async () => {
    firebase.auth().signOut();
  };
  console.log('NavBar.js user', user);
  return (
    <nav>
      <Link to="/">
        <h2 className="app-heading">Members-Only App</h2>
      </Link>
      {user ? (
        <>
          <button className="sign-out-button" onClick={onClickSignOut}>
            Sign Out
          </button>
          <p className="logged-in-as space-before">Logged in as {user.email}</p>
        </>
      ) : null}
    </nav>
  );
};
