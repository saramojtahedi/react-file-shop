import React, { useEffect } from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Home from './components/client/pages/Home'
import Login from './components/client/pages/Login'
import Files from './components/client/pages/Files'
import SingleFile from './components/client/pages/SingleFile'

import Main from './components/admin/Main'
import Post from './components/admin/Post'
import PostList from './components/admin/PostList'
import Signin from './components/client/pages/Signin'
import jwt from "jsonwebtoken";
import { addUser } from './redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './components/client/pages/Logout';
import "@reach/dialog/styles.css";
import AdminContext from './components/admin/context/AdminContext';

const App = () => {

  const courses = useSelector((state) => state.courses);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      const decodedToken = jwt.decode(token , {complete: true})
      const dateNow = Date.now() / 1000;
      if(decodedToken.payload.exp < dateNow) {
        localStorage.removeItem("token")
      } else {
        dispatch(addUser(decodedToken.payload.user))
      }
    }
  } , [])

  return (
    <div>
      <ToastContainer />
      <Router>
        <Switch>

          <Route path='/post' component={Post} />
          <Route path='/postList' render = { () => 
            <AdminContext courses={courses}><PostList/></AdminContext>
          } />

          <Route path='/log-in' component={Login} />
          <Route path='/sign-in' component={Signin} />
          <Route path='/logout' component={Logout} />
          <Route path='/files' component={Files} />

          <Route path='/dashboard' component={Main} />
          <Route path='/:id' component={SingleFile}/>

          <Route path='/' exact component={Home} />

        </Switch>
      </Router>
    </div>
  )
}

export default App;
