import React, { useRef, useState } from 'react'
import './Signin.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { Link , withRouter } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import {Helmet} from "react-helmet";
import { addUser } from '../../../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import jwt from "jsonwebtoken";



function Signin({history}) {

  const [fullname , setFullname] = useState ("")
  const [email , setEmail] = useState ("")
  const [password , setPassword] = useState ("")
  const [, forceUpdate] = useState()
  const [loading , setLoading] =useState(false)
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()


  const validator = useRef(new SimpleReactValidator({
    messages: {
      required: " پر کردن این فیلد الزامی است ",
      min: " تعداد کاراکترهای ورودی کم است " ,
      email: " محتوای ورودی صحیح نیست "
    },
    element: message => <div style={{color: "red" , marginTop: "5px" , position: "absolute" , fontSize: "11px"}}>{message}</div>
  }))

  const reset = () => {
    setPassword("");
    setFullname("");
    setEmail("")
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { fullname , password , email }

    Axios.post('https://toplearnapi.ghorbany.dev/api/login', JSON.stringify((user)) ,
    {headers : {"Content-Type" : "application/json"}})
      .then((res) => {
        if(validator.current.allValid()){
          toast.success('خوش آمدید' , {position: 'bottom-right'})
          reset()
          history.replace('/')
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            const token = localStorage.getItem("token");
            const decodedToken = jwt.decode(token , {complete: true})
            dispatch(addUser(decodedToken(res.data.token).payload.user))
          } 
        } else {
          validator.current.showMessage()
          forceUpdate(1)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }

  return (
    <div>
      <Helmet>
        <title> ورود به سایت </title>
        <meta name="description" content="ورود" />
      </Helmet>

      <Navbar />
      <div className="login-container">
        <div className="col-md-12 top50 bottom50 text-center">
          <h3> فرم ورود </h3>
        </div>
        <form className="col-md-4 col-md-offset-4" onSubmit={handleSubmit}>
        <div className="form-group row bottom35">
            <label className="col-md-3">نام کاربری</label>
            <div className="col-md-9">
              <input type="text" className="form-control" name="fullname" placeholder="نام کاربری" value={fullname} 
              onChange={(e) => {
                setFullname(e.target.value);
                validator.current.showMessageFor(
                    "fullname"
                );
              }} />
              {validator.current.message(
                  "fullname",
                  fullname,
                  "required|min:5"
              )}
            </div>
          </div>
          <div className="form-group row bottom35">
            <label className="col-md-3">ایمیل</label>
            <div className="col-md-9">
              <input type="email" className="form-control" name="email" placeholder="ایمیل" value={email} 
              onChange={(e) => {
                setEmail(e.target.value);
                validator.current.showMessageFor("email");
              }} />
              {validator.current.message(
                  "email",
                  email,
                  "required|email"
              )}
            </div>
          </div>
          <div className="form-group row bottom35">
            <label className="col-md-3">رمز عبور</label>
            <div className="col-md-9">
              <input type="password" className="form-control" placeholder="رمز عبور" value={password} 
              onChange={(e) => {
                setPassword(e.target.value)
                validator.current.showMessageFor("password");
              }} />
              {validator.current.message(
                  "password",
                  password,
                  "required|min:5"
              )}
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary col-md-5 top25">ورود</button>
            <Link to="/log-in" type="submit" className="btn btn-info col-md-5 col-md-offset-1 top25"> عضویت در سایت </Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default withRouter(Signin)
