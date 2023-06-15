import React from 'react';
import { useState } from 'react';
import '../../SignUp.css';
const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling here
    if (username.endsWith('@statefarm.com')) {
      // Username is valid, perform form submission or data handling here
      console.log('Username is valid:', username);
      console.log('Password:', password);
    } else {
      // Username is invalid, show an error message or take appropriate action
      setErrorMessage('Invalid username');
    }
  };

  return (
    <div className="signup-form">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">State Farm Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">State Farm Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignupForm;
