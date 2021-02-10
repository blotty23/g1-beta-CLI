

import React from 'react'
import {
  Link
} from "react-router-dom";


export default function home() {
  return (
    <div>
      <h1>Hello from the home page</h1>
      <Link to="/auth"><button>Log in</button></Link>
      <Link to="/dashboard">Dashboard</Link>
    </div> 
    )
}