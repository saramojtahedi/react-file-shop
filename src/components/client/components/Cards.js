import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import File from '../pages/File'
import './Cards.css'
import { paginate } from './paginate'

function Cards() {

  const courses = useSelector(state => state.courses)
  const indexCourses = paginate(courses , 1 , 4);

  return (
    <div>
      <div class="container bottom50">
        <div class="row">
          <div class="col-md-12 bottom25 title">
            <h3 class="text-right">
              جدیدترین دوره ها
            </h3>
            <Link to="/files"><i class="fa fa-2x fa-arrow-left"></i></Link>
          </div>
          <div class="col-md-12">
            <File courses={indexCourses} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
