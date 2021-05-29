import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Navbar ({location}) {
  return (
    <div class="col-md-1 sidebar_container">
      <div class="sidebar">
        <ul>
        <li><Link to="/dashboard"><i class="fa fa-cog"></i></Link></li>
          <li><Link to="/post"><i class="fa fa-plus"></i></Link></li>
          <li><Link to="/postList"><i class="fa fa-clone"></i></Link></li>
          <br/><br/><br/>
          <li><Link to="/"><i class="fa fa-power-off"></i></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
