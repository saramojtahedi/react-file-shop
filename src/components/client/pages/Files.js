import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import { paginate } from './../components/paginate' 
import File from './File'
import './Files.css'

function Files() {

  const courses = useSelector(state => state.courses)

  const [perPage , setPerPage] = useState(12)
  const [currentPage , setCurrentPage] = useState(1)
  const handlePageChange  = (page) => {
    setCurrentPage(page)
  }

  const archiveCourses = paginate(courses , currentPage , perPage)



  return (
    <>
      <Navbar />
      <div className="container">
        <File courses={archiveCourses} />
      </div>
      <Pagination totalCourse={courses.length} currentPage={currentPage} perPage={perPage} onPageChange={handlePageChange} />
    </>
  )
}

export default Files
