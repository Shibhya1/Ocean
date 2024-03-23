import React from 'react';
import { Link } from 'react-router-dom';
import "./hero2.css";
import MumbaiComponent from './MumbaiComponent';
import PuneComponent from './PuneComponent';
import ThaneComponent from './ThaneComponent';
import Modal from './Modal';

// const ContributeModal = ({ onClose }) => {
//   const [selectedLocation, setSelectedLocation] = React.useState(" ");
//   console.log(selectedLocation)
//   const handleLocationChange = (event) => {
//     setSelectedLocation(event.target.value);
//   };

//   // const renderComponent = () => {
//   //   switch (selectedLocation) {
//   //     case 'Mumbai':
//   //       return <MumbaiComponent />;
//   //     case 'Pune':
//   //       return <PuneComponent />;
//   //     case 'Thane':
//   //       return <ThaneComponent />;
//   //     default:
//   //       return <MumbaiComponent />;
//   //   }
//   // };

//   return (
//     <div className="modal" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>Select a Location</h2>
//         <select value={selectedLocation} onChange={handleLocationChange}>
//           <option value="">Select</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Pune">Pune</option>
//           <option value="Thane">Thane</option>
//         </select>
//         {/* {renderComponent()} */}
//       </div>
//     </div>
//   );
// };

export default function Hero2() {
  // const [modalOpen, setModalOpen] = React.useState(false);
  // console.log(modalOpen)
  const [open, setOpen] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState(" ");
  
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    // Navigate to the selected location
    if (selectedLocation) {
      window.location.href = `/${selectedLocation.toLowerCase()}`;
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // const handleContributeClick = () => {
  //   setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  const heroBackground = {
    backgroundColor: "rgb(0, 35, 54)"
  };

  const heroImage = {
    borderRadius: "50px"
  };

  return (
    <div >
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 px-5 " style={heroBackground}>
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg" className="d-block mx-lg-auto img-fluid   " alt="Bootstrap Themes" width="700" height="500" loading="lazy" style={heroImage}></img>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold  lh-1 mb-3 text-white">Protect Our Water Bodies</h1>
          <p className="lead text-white">We tackle ocean plastic pollution by developing innovative methods to detect plastic debris using advanced technologies. Through raising awareness and promoting solutions, we strive to protect our marine ecosystems and keep our oceans plastic-free.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <form action="/action_page.php">
              <label htmlFor="file-upload" className="custom-file-upload">
                Add Images
              </label>
              <input id="file-upload" type="file" />
              <input type="submit" className='bg-success btn-lg rounded-3 px-3 py-2 text-white border border-dark' />
            </form>

            <button type="button " className="bg-primary text-white btn-lg rounded-3 px-3 py-2 border border-dark " onClick={handleOpen}>
              Contribute
            </button>
            <Modal isOpen={open} >
              <>
                <h4 className="text-dark">Select a Location</h4>
                <select value={selectedLocation} onChange={handleLocationChange} >
                  <option value="" >Select</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Thane">Thane</option>
                </select>
              
                <button type="submit" className='text-white btn-lg rounded-3 px-3 py-1 bg-success mx-5 border border-dark' onClick={handleClose}>Submit</button>
              </>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
