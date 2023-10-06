import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Login from './component/Login';
import Signup from './component/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Devlink Marketplace</h1>
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Find Dev</Link>
              </li>
              <li>
                <Link to="/about">Find Customer</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;