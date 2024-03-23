import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Pune() {
  return (
    <div>
    <Navbar />
    <h2 className='p-3'>NGOs in Pune</h2>
    <div className='container'>
                <div className="row m-3">
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <a href="https://indianmaritimefoundation.org.in/coastal-clean-up/"><img src="https://en-media.thebetterindia.com/uploads/2018/11/1-Hour-1-Day-In-a-Week-for-1-Year_-Punekars-Join-Hands-to-Breathe-Life-Into-2-Rivers.jpg" height="225px" className="card-img-top" alt="..."></img></a>
                            <div className="card-body">
                                <h3>Indian Maritime Foundation</h3>
                                <p className='p-2'>Coastel Cleanup</p>
                            </div>
                        </div>
                    </div>

                 
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                        <a href="https://plasticoceans.org/bluecommunities-pune-india/"><img src="https://static.toiimg.com/thumb/imgsize-23456,msid-71233020,width-600,resizemode-4/71233020.jpg" height="225px" className="card-img-top" alt="..."></img></a>
                            <div className="card-body">
                                <h3>Blue Communities</h3>
                                <p className='p-2'>Plastic reduction and waste management awareness</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                        <a href="https://www.facebook.com/oceanfacility/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_F-xHn58YxUn1wuND8FAhKJhnlKBq-_eTlw&usqp=CAU" height="225px" className="card-img-top" alt="..."></img></a>
                            <div className="card-body">
                            <h3>Ocean Facility Management</h3>
                                <p>Handling the spotless cleaning business since 2009</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <Footer />
    </div>
  )
}
