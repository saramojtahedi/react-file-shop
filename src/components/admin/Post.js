import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createNewCourse } from '../../redux/actions/courses'
import './Dashboard.css'
import Navbar from './Navbar'

function Post () {

  const [title , setTitle] = useState()
  const [price , setPrice] = useState()
  const [info , setInfo] = useState()
  const dispatch = useDispatch()

  
  const handleSubmit = (event) => {
    event.preventDefault();

    try {

      let data = new FormData()
      data.append("title" , title)
      data.append("price" , Number.parseInt(price))
      data.append("info" , info)
      data.append("imageUrl" , event.target.imageUrl.files[0])
      dispatch(createNewCourse(data)) 
      toast.success(' پست ایجاد شد ' , {position: 'bottom-right'})
    } catch(ex) {
      console.log(ex)
      toast.error(' مشکلی پیش آمده است ' , {position: 'bottom-right'})
    }
  }

  return (
    <>
      <Navbar />
      <div className="col-md-11 Dashboard-content-container">
        <div class="mainboard_layout" id="">
          <div class="col-md-12 D_title"><h3 class="text-center">ساخت محصول</h3></div>
        </div>

        <div className="col-md-12">
          <form onSubmit={handleSubmit} className="form col-md-8 col-md-offset-2">
            <div class="form-group col-md-10">
              <label className="col-md-3"> عنوان محصول</label>
              <input className="col-md-9 form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div class="form-group col-md-10">
              <label className="col-md-3"> قیمت محصول</label>
              <input className="col-md-9 form-control" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div class="form-group col-md-10">
              <label className="col-md-3"> اطلاعات محصول</label>
              <textarea className="col-md-9 form-control" name="info" value={info} onChange={e => setInfo(e.target.value)} />
            </div>
            <div class="form-group col-md-10">
              <label className="col-md-3"> عکس محصول</label>
              <input className="" type="file" name="imageUrl" />
            </div>
            <div className="form-group col-md-4 col-md-offset-4">
              <button className="col-md-12 btn btn-success" type="submit"> ثبت دوره </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Post
