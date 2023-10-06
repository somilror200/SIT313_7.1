import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = () => {
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setError('Passwords do not match');
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError('');
    if (validatePassword()) {
      // Create a new user using email and password with Firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
          navigate('/login');
        })
        .catch((err) => setError(err.message));
    }
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={register} name="registration_form">
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
