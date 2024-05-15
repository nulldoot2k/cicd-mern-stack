import React from 'react';
import { Link } from 'react-router-dom';

function Default() {
  return (
    <div>
      <h2>Default Component</h2>
      <span>
        <p>
          Home Page Admin <Link to="/home">Home</Link>.
        </p>
        <p>
          To access the home page, you need to <Link to="/login">login</Link>.
        </p>
        <p>
          If you don't have an account, <Link to="/register">sign up</Link>.
        </p>
      </span>
    </div>
  );
}

export default Default;
