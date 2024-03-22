import React from 'react'

export default function Hero() {
  const heroBackground ={
    backgroundColor:"#259faf"
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
        <p className="lead text-white">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-success btn-lg px-4 me-md-2 text-white border border-dark" >Login</button>
          <button type="button" className="btn btn-success btn-lg px-4 text-white border border-dark">Signup</button>
        </div>
      </div>
    </div>

    </div>
  )
}
