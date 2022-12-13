import React from 'react'
import pic from '../images/logo.svg'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='main'>
        <div className="logo">
            <img src={pic} alt="" />
        </div>
        <div className="navbar">
            <div className="navbar-item">Home</div>
            <div className="navbar-item">New</div>
            <div className="navbar-item">Popular</div>
            <div className="navbar-item">Trending</div>
            <div className="navbar-item">Categories</div>
        </div>
    </div>
  )
}
