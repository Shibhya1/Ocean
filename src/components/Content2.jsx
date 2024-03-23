import React from 'react'

export default function Content2() {
  
    const content1bg ={
        backgroundColor:"rgb(0, 35, 54)",
        fontSize:"20px",
        color:"white"
      }
      const content1img={
        borderRadius:"50px"
      }
        return (
      
            <div className="d-flex align-items-center " style={content1bg}>
        <div className="flex-grow-1 ms-3">
        <h2 style={{textAlign:"left"}} >Community Cleanup </h2>
        <p>Empowering communities to detect plastic pollution <br></br>in the ocean and organizing cleanup efforts. </p>

      </div>
      <div className="flex-shrink-0 col-md-6 ">
        <img src="https://en-media.thebetterindia.com/uploads/2019/06/Beach517.jpg"  style={content1img} className="img-fluid p-3" alt="..." width="750px"/>
      </div>
     
    </div>
       
      )
}
