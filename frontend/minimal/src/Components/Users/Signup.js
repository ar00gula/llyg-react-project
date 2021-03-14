import React, { useState } from 'react';

function SignUpForm(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      props.handleLogin(data.user)
    })
    setUsername("")
    setPassword("")
  }
  
}

export default SignUpForm;