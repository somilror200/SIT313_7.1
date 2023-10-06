// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setError('');
    // Sign in the user using email and password with Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        // Navigate to the user's home upon successful login
        navigate('/');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={login} name="login_form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
