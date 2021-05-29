
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../../redux/actions/user';

function Logout ({history}) {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("token")
    dispatch(clearUser())
    history.push("/")
  } , [])

  return (null)
}

export default Logout
