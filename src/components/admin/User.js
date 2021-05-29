import React from 'react'
import './Dashboard.css'
import Navbar from './Navbar'


function User () {
  return (
    <>
      <Navbar />
      <div className="col-md-11 Dashboard-content-container">
        <div class="mainboard_layout user" id="user">
          <div class="col-md-12 D_title"><h3 class="text-center">ساخت کاربر</h3></div>
        </div>
      </div>
    </>
  )
}

export default User
