

import React from 'react'
import {
  Link
} from "react-router-dom";


export default function home() {
  return (
    <div>
      <h1>Hello from the home page</h1><br/>
      <Link to="/auth">Log in</Link><br/>
      <Link to="/dashboard">Dashboard</Link>
    </div> 
    )
}