import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const heroBackground ={
    backgroundColor:"rgb(0, 35, 54)"
  }
  const lenght={
    height:"100%"
}
const heroImage={
    borderRadius:"50px"
}
    return (
    <div style={lenght}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 px-5 " style={heroBackground}>
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg" className="d-block mx-lg-auto img-fluid   " alt="Bootstrap Themes" width="700" height="500" loading="lazy" style={heroImage}></img>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold  lh-1 mb-3 text-white">Protect Our Water Bodies</h1>
        <p className="lead text-white">We tackle ocean plastic pollution by developing innovative methods to detect plastic debris using advanced technologies. Through raising awareness and promoting solutions, we strive to protect our marine ecosystems and keep our oceans plastic-free.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link className="btn bg-success btn-lg px-4 text-white border border-dark " to ="/dashboard">Login</Link>
        <Link className="btn bg-success btn-lg px-4 text-white border border-dark " to ="/signup">Sign up</Link>
        
        </div>
      </div>
    </div>

    </div>
  )
}
