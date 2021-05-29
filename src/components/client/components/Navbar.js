import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {isEmpty} from 'lodash'

const Navbar = () => {

  const user = useSelector(state => state.user)

  return (
    <div>
      	<header className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="menu">
                  <nav>
                    <ul>
                      <li><Link to="/">صفحه اصلی</Link></li>
                      <li><Link to="./files">دوره ها</Link></li>
                      <li><Link to="./dashboard"> داشبورد </Link></li>
                      {(!isEmpty(user)) ? (<li><Link to="/logout"> خروج </Link></li>) : (<li><Link to="./log-in"> ورود | عضویت </Link></li>) }

                    </ul>
                    <div className="logo">
                      <Link to="/"><img src="./img/logo.png" alt="logo" /></Link>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Navbar;
