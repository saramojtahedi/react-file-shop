import React, { useRef, useState } from 'react'
import './Login.css'
import Navbar from '../components/Navbar'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import {Helmet} from "react-helmet";

function Login({history}) {

  const [fullname , setFullname] = useState ("")
  const [email , setEmail] = useState ("")
  const [password , setPassword] = useState ("")
  const [policy , setPolicy] = useState()
  const [, forceUpdate] = useState()

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

    Axios.post('https://toplearnapi.ghorbany.dev/api/register', JSON.stringify((user)) ,
    {headers : {"Content-Type" : "application/json"}})
      .then((res) => {
        if(validator.current.allValid()){
          toast.success('کاربر با موفقیت ساخته شد' , {position: 'bottom-right'})
          reset()
          history.push("/sign-in")
        } else {
          validator.current.showMessage()
          forceUpdate(1)
        }
      })
      .catch((err) => {
        toast.error('مشکلی پیش آمده' , {position: 'bottom-right'})
      })
    }

  return (
    <div>
      <Helmet>
        <title> عضویت در سایت </title>
        <meta name="description" content="عضویت" />
      </Helmet>

      <Navbar />
      <div className="login-container">
        <div className="col-md-12 top50 bottom50 text-center">
          <h3> فرم عضویت </h3>
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
          <div class="form-check">
            <input type="checkbox" className="form-check-input" name="policy" id="check" 
            onChange={(e) => {
              setPolicy(e.currentTarget.checked)
              validator.current.showMessageFor("policy")
            }}/>
              {validator.current.message(
                "policy",
                policy,
                "required"
              )}
            <label class="form-check-label" for="check"> مقررات را خوانده ام </label>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary col-md-5 top25">عضویت</button>
            <Link to="/sign-in" type="submit" className="btn btn-info col-md-5 col-md-offset-1 top25"> قبلا عضو شده ام</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
