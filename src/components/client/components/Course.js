import React from 'react'
import { useSelector } from 'react-redux'
import './Cards.css'

function Course () {
  const courses = useSelector(state => state.courses)

  return (
    <div>
      <div class="container bottom50">
        <div class="row">
          <div class="col-md-12 bottom25 title">
            <h3 class="text-right">
              جدیدترین دوره ها
            </h3>
          </div>
          <div class="col-md-12">
          {courses.map(course => (
            <div className="col-md-4" >
                <article>
                    <h2> {course.title} </h2>
                </article>
            </div>
          ))}   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
