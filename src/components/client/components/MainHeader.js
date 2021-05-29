import React from 'react'
import { Link } from 'react-router-dom'
import './MainHeader.css'

function MainHeader () {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 main_header">
            <div className="col-md-10 header-content">
              <h4 className="text-right"> فروش دوره های آموزشی وب </h4>
              <p className="text-right"> دوره های آموزشی سمت سرور و سمت کلاینت را از سایت ما تهیه کنید </p>
            </div>
            <div className="col-md-2 header-background p-0">
              <img src="./img/bg-4.jpg" alt="header-background" />
            </div>
          </div>
        </div>
        <div className="row top25">
          <div className="col-md-12 p-0 responsive">
            <Link to="/files" className="shop_card_container col-md-4">
              <div className="shop_card">
                <div className="card_content">
                  <h4>وردپرس</h4>
                  <p className="text-muted"> 10 دوره</p>
                </div>
                <div className="card_image">
                  <i className="fa fa-2x fa-code"></i>
                </div>
              </div>
            </Link>
            <Link to="/files" className="shop_card_container col-md-4">
              <div className="shop_card">
                <div className="card_content">
                  <h4> جاوا اسکریپت </h4>
                  <p className="text-muted"> 12 دوره</p>
                </div>
                <div className="card_image">
                  <i className="fa fa-2x fa-code"></i>
                </div>
              </div>
            </Link>
            <Link to="/files" className="shop_card_container col-md-4">
              <div className="shop_card">
                <div className="card_content">
                  <h4> ری اکت </h4>
                  <p className="text-muted"> 3 دوره</p>
                </div>
                <div className="card_image">
                  <i className="fa fa-2x fa-code"></i>
                </div>
              </div>
            </Link>
            <Link to="/files" className="shop_card_container col-md-4">
              <div className="shop_card">
                <div className="card_content">
                  <h4> php | Laravel </h4>
                  <p className="text-muted"> 0 دوره </p>
                </div>
                <div className="card_image">
                  <i className="fa fa-2x fa-code"></i>
                </div>
              </div>
            </Link>
            <Link to="/files" className="shop_card_container col-md-4">
              <div className="shop_card">
                <div className="card_content">
                  <h4> Asp.net </h4>
                  <p className="text-muted"> 2 دوره</p>
                </div>
                <div className="card_image">
                  <i className="fa fa-2x fa-code"></i>
                </div>
              </div>
            </Link>
            <Link to="/files" className="shop_card_container col-md-4">
              <div className="shop_card">
                <div className="card_content">
                  <h4> پایتون </h4>
                  <p className="text-muted"> 12 دوره</p>
                </div>
                <div className="card_image">
                  <i className="fa fa-2x fa-code"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
