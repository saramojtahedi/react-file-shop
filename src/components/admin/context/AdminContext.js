import React, { useEffect, useState } from 'react'
import { paginate } from '../../client/components/paginate'
import DeleteCourseDialog from '../dialogs/DeleteCourseDialog'
import EditCourseDialog from '../dialogs/EditCourseDialog'
import {Dcontext} from './Dcontext'
import {orderBy} from 'lodash'

const AdminContext = ({courses, children}) => {

  const [perPage , setPerPage] = useState(30)
  const [currentPage , setCurrentPage] = useState(1)
  const [editCourseDialog , setEditCourseDialog] = useState(false)
  const [deleteCourseDialog , setDeleteCourseDialog] = useState(false)
  const [currentCourse , setCurrentCourse] = useState({})
  const [courseList, setCourseList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => setCourseList(courses), [courses])

  const openEditCourseDialog = (course) => {
    setEditCourseDialog(true)
    setCurrentCourse(course)
  }

  const openDeleteCourseDialog = (course) => {
    setDeleteCourseDialog(true)
    setCurrentCourse(course)
  }

  const closeEditCourseDialog = () => setEditCourseDialog(false)
  const closeDeleteCourseDialog = () => setDeleteCourseDialog(false)


  const sortCoursesAsc = () => {
    setCourseList(orderBy(courseList , 'price' , 'asc'))
  }

  const sortCoursesDes = () => {
    setCourseList(orderBy(courseList , 'price' , 'desc'))
  }

  const handlePageChange  = (page) => {
    setCurrentPage(page)
  }

  const filteredCourses = courseList.filter(
    course => course.title.includes(search)
  )

  const courseData = paginate(filteredCourses , currentPage , perPage)

  return (
    <Dcontext.Provider 
    value={{currentPage, perPage, handlePageChange, courseData, openEditCourseDialog, openDeleteCourseDialog, setSearch ,sortCoursesAsc, sortCoursesDes}}>
      <EditCourseDialog showDialog={editCourseDialog} closeDialog={closeEditCourseDialog} course={currentCourse} />
      <DeleteCourseDialog showDialog={deleteCourseDialog} closeDialog={closeDeleteCourseDialog} course={currentCourse} />

      {children}
    </Dcontext.Provider>
  )
}

export default AdminContext
