import React, { useState } from 'react'
import axios from 'axios'
import {useEffect} from 'react'

async function LoginUser(credintials) {
  return await fetch("http://localhost:6969/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credintials)
  }).then(data => data.json())
}

function Login({ setToken, token }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await LoginUser({
      username,
      password
    });
    await setToken(token);
    console.log(token)
    window.location.reload();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span> Admin Login </span>
        <br />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login