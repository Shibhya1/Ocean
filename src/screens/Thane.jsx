import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
export default function Thane() {
  return (
    <div>
    <Navbar />
    <h2 className='p-3'>NGOs in Thane</h2>
    <div className='container'>
                <div className="row m-3">
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ width: "21rem" }}>
                            <a href="https://www.unitedwaymumbai.org/cleanshores"><img src="https://www.unitedwaymumbai.org/storage/campaign_pics/67-1653278885.jpg" height="225px" className="card-img-top" alt="..."></img></a>
                            <div className="card-body">
                                <h3>Turtle Conservancy of India (TCI)</h3>
                                <p>Clean Shores</p>
                            </div>
                        </div>
                    </div>     
                    <div className="col-12 col-md-6 col-lg-4 mb-4 ">
                        <div className="card" style={{ width: "21rem" }}>
                        <a href="https://projectmumbai.org/jallosh/"><img src="https://static.toiimg.com/thumb/imgsize-23456,msid-71233020,width-600,resizemode-4/71233020.jpg" height="225px" className="card-img-top" alt="..."></img></a>
                            <div className="card-body">
                                <h3>Sea Watch Foundation of India (SWFI)</h3>
                                <p>Protecting Thane's Water Bodies</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ width: "21rem" }}>
                        <a href="https://www.khushiyaanfoundation.org/beachwarriors.php"><img src="https://static.pib.gov.in/WriteReadData/userfiles/image/Coastal5FHL6.jpg" height="225px" className="card-img-top" alt="..."></img></a>
                            <div className="card-body">
                            <h3> Blue Ocean Reporting (BOR)</h3>
                                <p>Beach Warriors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <Footer />
    </div>
  )
}
