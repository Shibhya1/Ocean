import React from 'react'

export default function Content1() {
  const content1bg ={
    backgroundColor:"rgb(0, 35, 54)",
    fontSize:"20px"
  }
  const content1img={
    borderRadius:"50px"
  }
    return (
  
        <div className="d-flex align-items-center " style={content1bg}>
  <div className="flex-shrink-0 col-md-6">
    <img src="https://www.shutterstock.com/image-photo/female-scuba-diver-taking-photo-600nw-2303138149.jpg"  className="img-fluid p-3" alt="..." width="750px" style={content1img}/>
  </div>
  <div className="flex-grow-1 ms-3">
    <h2 style={{textAlign:"right",paddingRight:"35px"}}>Match with the best agent.</h2>
    <p style={{textAlign:"right",paddingRight:"35px"}}> Our verified partner Agents are local experts who<br></br> earn an average of 4.5/5 stars from buyers and sellers. </p>

  </div>
</div>
   
  )
}





//  <div className=" py-4 bg-success-subtle mx-0  ">
//       <div className="row d-flex align-items-center">
//       <div className="col-md-6 px-3 flex-shrink-0">
//           <img src="" className="img-fluid rounded-3 border border-dark border-5" alt="Your Image" />
//         </div>
//         <div className="col-md-6  flex-grow-1 ms-3 ">
//           <h2 className='text-dark '>Right Text</h2>
//           <p className=" lead text-dark ">This is the text content on the right side.</p>
//         </div>
//     </div>

//     </div>
