import React from 'react'
import Navbar from '../components/Navbar'
import './about.css'
export default function EduContent() {
    const imageUrl1 = 'https://source.unsplash.com/random/900x700/?ocean'; // Replace with your actual image path (local or external)
    const imageUrl2 = 'https://source.unsplash.com/random/900x700/?beaches'; // Replace with your actual image path
    const imageUrl3 = 'https://source.unsplash.com/random/900x700/?seas'; // Replace with your actual image path
  
    return (
        <div>
            <Navbar />
            <section id="about">
                <h2>Educational Content</h2>
            </section>
            <div className="container px-4 " id="custom-cards">
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${imageUrl1})` , width:'100%'}}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ocean Plastic Detection Algorithms</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="https://climate.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEVzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a90ffbbfb0a66302208afcb90c58910f17ffc0ef/1-greenland-1600.jpeg" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                                        <small>Earth</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
            <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${imageUrl2})` , width:'100%'}} >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ocean Content</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="https://climate.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEVzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a90ffbbfb0a66302208afcb90c58910f17ffc0ef/1-greenland-1600.jpeg" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                                        <small>Earth</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
            <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${imageUrl3})` , width:'100%'}} >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ocean Content</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="https://climate.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEVzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a90ffbbfb0a66302208afcb90c58910f17ffc0ef/1-greenland-1600.jpeg" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                                        <small>Earth</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
            <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



//<div class="container px-4 py-5" id="custom-cards">
{/* <h2 class="pb-2 border-bottom">Custom cards</h2>

<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
  <div class="col">
    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-1.jpg');">
      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
        <ul class="d-flex list-unstyled mt-auto">
          <li class="me-auto">
            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
          </li>
          <li class="d-flex align-items-center me-3">
            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
            <small>Earth</small>
          </li>
          <li class="d-flex align-items-center">
            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
            <small>3d</small>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-2.jpg');">
      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
        <ul class="d-flex list-unstyled mt-auto">
          <li class="me-auto">
            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
          </li>
          <li class="d-flex align-items-center me-3">
            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
            <small>Pakistan</small>
          </li>
          <li class="d-flex align-items-center">
            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
            <small>4d</small>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-3.jpg');">
      <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
        <ul class="d-flex list-unstyled mt-auto">
          <li class="me-auto">
            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
          </li>
          <li class="d-flex align-items-center me-3">
            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
            <small>California</small>
          </li>
          <li class="d-flex align-items-center">
            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
            <small>5d</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div> */}