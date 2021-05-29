import React from 'react'
import { Link } from 'react-router-dom'
import './Files.css'

function File({courses}) {

  return (
    <div>
      <div className="files_container">
        {courses.map((course) => (
          <div className="col-md-3 shop-card-container">
            <Link to={`/${course._id}`} className="col-md-12 shop-card" key={course._id}>
              <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} />
              <div className="shop-card-content">
                <h6 className="text-right"> {course.title} </h6>
                <div className="shop-info">
                  <span className="text-left">{course.price} تومان </span>
                  <span className="text-right"> مدرس </span>
                </div>
              </div>
            </Link>
          </div>
        ))}   
      </div>
    </div>
  )
}

export default File
