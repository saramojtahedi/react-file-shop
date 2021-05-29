import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCourse } from '../../../redux/actions/course'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Files.css'

function SingleFile ({match}) {

  const course = useSelector(state => state.course)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleCourse(match.params.id))
  } , [])

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="single-card">
            <div className="file-image ">
            <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} />
            </div>
            <div className="shop-card-content">
              <h3 className="text-center"> {course.title} </h3>
              <p className="text-right">{ course.info} </p>
              <div className="singleCard-footer">
                <span className="text-left">قیمت : <strong>{course.price} تومان </strong></span>
                <button className="btn btn-primary col-md-3"> خرید </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleFile 
