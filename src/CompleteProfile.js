import React, { useState } from 'react';
import './CompleteProfile.css';
import UploadButton from './Components/UploadButtton';
import PhotoProfile from './Components/PhotoProfile';
import ContinueButton from './Components/ContinueButton';
const CompleteProfile = () => {
  const [portfolioLink, setPortfolioLink] = useState('');
  const [file, setFile] = useState(null);

  /*const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ portfolioLink, file });
  };

  return (
  
    <div className="all">
      <div className='imgClass'>
      <img  alt='leftPhoto' src='left(2).png'/>
      </div>
      <div className='right'>
      <p className='title'>Complete Your Profile</p>
      
      <p className='text' >You're all set! Want to make your profile stand out? 
        Add your CV, portfolio, or profile picture now--or skip and do it later</p>
       
       <PhotoProfile></PhotoProfile>
        <UploadButton></UploadButton>
        <ContinueButton name="Continue"></ContinueButton>
        <ContinueButton name="skip"></ContinueButton>

      
      </div>
    </div>
  );
};

export default CompleteProfile;