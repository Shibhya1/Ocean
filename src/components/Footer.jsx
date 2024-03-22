import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const backgroundNav={
        backgroundColor:"#152636",
        color:"white"
    }
    return (
    <div >
        <footer className="py-3" style={backgroundNav}>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-white ">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link px-2   text-white">About</Link></li>
      <li className="nav-item"><Link to="/contacts" className="nav-link px-2  text-white">Contacts</Link></li>
      <li className="nav-item"><Link to="/programs" className="nav-link px-2   text-white">Programs</Link></li>
    </ul>
    <p className="text-center text-white">© 2024 Company, Inc</p>
    </footer>
    </div>
    
  )
}
