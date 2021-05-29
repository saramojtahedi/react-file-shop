import React from 'react'
import Navbar from './Navbar'
import './Dashboard.css'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { paginate } from '../client/components/paginate'
import Footer from '../client/components/Footer'

function Main () {

  const user = useSelector(state => state.user)
  const courses = useSelector(state => state.courses)
  const indexCourses = paginate(courses , 1 , 6)


  return (
    <>
      <Helmet>
        <title> داشبورد کاربر </title>
        <meta name="description" content="داشبورد" />
      </Helmet>

      <Navbar />
      <div className="col-md-11 Dashboard-content-container">
        <div class="mainboard_layout dash" id="main">
          <div class="col-md-12 D_title"><h3 class="text-center"> داشبورد </h3></div>
        </div>
        <div className="container-fluid padding_top_half">
          <div className="col-md-12 dashboard_main_header">
            <div className="col-md-4 username">
              <h4><strong>{user.fullname}</strong> خوش آمدید </h4>
            </div>
            <div className="col-md-6 dashboardCards">
              <Link to="/post" className="smallcard col-md-3">
                <i className="fa fa-plus"></i>
                <h6 className="text-center">ایجاد پست</h6>
              </Link>
              <Link to="/postList" className="smallcard col-md-3">
                <i className="fa fa-clone"></i>
                <h6 className="text-center"> لیست پست ها </h6>
              </Link>
              <Link to="/logout" className="smallcard col-md-3">
                <i className="fa fa-power-off"></i>
                <h6 className="text-center"> خروج </h6>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 padding_top_half">
              <div className="col-md-4 lastCourses">
                <h5 className="text-right bottom10">آخرین دوره ها </h5>
                {indexCourses.map((course) =>
                  <h6 className="text-right courseTitle">{course.title}</h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Main
