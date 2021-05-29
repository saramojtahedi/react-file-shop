import Axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { getCourses } from '../../redux/courseService'
import Pagination from '../client/components/Pagination'
import {paginate} from './../client/components/paginate'
import { Dcontext } from './context/Dcontext'
import './Dashboard.css'
import Navbar from './Navbar'


function PostList () {

  const context = useContext(Dcontext)
  const {currentPage, perPage, handlePageChange, courseData, openEditCourseDialog, openDeleteCourseDialog, setSearch, filteredCourses, sortCoursesAsc, sortCoursesDes} = context


  return (
    <>
      <Navbar />
      <div className="col-md-11 Dashboard-content-container">
        <div class="mainboard_layout" id="">
          <div class="col-md-12 D_title"><h3 class="text-center">محصولات</h3></div>
        </div>

        <div className="row padding_top_half">
          <div className="col-md-6 searchBox">
            <h6 className="col-md-2"> جستجو </h6>
            <div className="col-md-6">
              <input onChange={(e) => setSearch(e.target.value)} className="form-control" />
            </div>
          </div>
        </div>

        <div className="col-md-12 dash_content">
          <table className="table table-bordered">
            <thead>
              <th scope="col" className="small_title"> نام محصول</th>
              <th scope="col" className="small_title"> عکس </th>
              <th scope="col" className="small_title d-flex"> قیمت 
                <i className="fa fa-long-arrow-up mr-2" onClick={sortCoursesAsc} style={{cursor: "pointer"}}></i>
                <i className="fa fa-long-arrow-down" onClick={sortCoursesDes} style={{cursor: "pointer"}}></i>
              </th>
              <th scope="col" className="small_title"> مدیریت </th>
            </thead>
            <tbody>
            {courseData.map((course) => (
              <tr key={course._id} >
                <td className="text-right p2">{course.title}</td>
                <td className="text-right p2"><img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} /></td>
                <td className="text-right p2">{course.price === 0 ? "رایگان" : `${course.price}`}</td>
                <td className="text-right p2 handle">
                  <button className="btn btn-warning" onClick={() => openEditCourseDialog(course)}> ویرایش </button>
                  <button className="btn btn-danger" onClick={() => openDeleteCourseDialog(course)}> حذف </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          <Pagination totalCourse={courseData.length} currentPage={currentPage} perPage={perPage} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  )
}

export default PostList
