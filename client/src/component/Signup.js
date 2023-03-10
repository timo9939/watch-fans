import React from 'react';
import "./signup.css";

const { useState } = require('react')


function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const updateUsername = e => setUsername(e.target.value)
  const updatePassword = e => setPassword(e.target.value)
  
  const signup = e => {
    e.preventDefault()
    console.log('Username', username)
    console.log('Password', password)
  }

  return (
    <div className="signUpDiv">
      <form onSubmit={signup}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={updateUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={updatePassword}
        />
        <button>SIGNUP</button>
      </form>
    </div>
  )
}

export default Signup