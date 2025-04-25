import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate(-1);
    }
    const error = useRouteError();
    console.log(error);
    
  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      {
        error && <p>{error.data}</p>
      }
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
      <button onClick={handleNavigate}>Go to previous page</button>
    </div>
  )
}

export default ErrorPage
