import { createContext } from "react";


export const Dcontext = createContext({
  currentPage: 1,
  setCurrentPage: () => {},
  perPage : 5,
  handlePageChange : () => {},
  currentCourse : {} ,
  setSearch : () => {} ,
  openNewCourseDialog : () => {},
  openEditCourseDialog : () => {},
  openDeleteCourseDialog : () => {},
  courseData : [] ,
  filteredCourses : [] ,
  sortCourseASC : () => {} ,
  sortCourses : () => {}
})