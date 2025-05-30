import React from 'react';
import StateButton from './Components/StateButton' ;
import StateButtonPlus from './Components/StateButtonPlus' ;
import JobCard from './Components/JobCard';
import LandingCards from './Components/LandingCards';
import JobOffers from './Components/JobOffers' ;
import OffersDropdown from './Components/OffersDropdown';
import Navemp from './Components/Navemp';
import UserSection from './Components/UserSection';
import Topemp from './Components/Topemp';
import guy1 from './assets/guy1.jpg';
import plus from './assets/plus.png';
import ContinueButton2 from './Components/ContinueButton2';
import ContinueButton3 from './Components/ContinueButton3';
import PopUp from './Components/PopUp';
import { useState } from 'react';
import './JobOffersPage.css'
function JobOffersPage(){
   const [showPopup, setShowPopup] = useState(false);
    return( <>
       <div className='laPage'>
     <div className='leftSide '>
        <Topemp></Topemp>
     </div>
     
     <div className='rightSide'>
        <div className='Nave'>
            <Navemp></Navemp>
        </div>
        <div className='addOff'>
          {/* <div></div> */}
          <div><ContinueButton3  onClick={() => setShowPopup(!showPopup)} className='myButtonOff' imge='plus.png' width='140px' text3='Add offer'></ContinueButton3></div>
           
        </div>
        {/* Render the PopUp component */}
        {showPopup && <PopUp onClose={() => setShowPopup(false)} />}

     <div className='CardOffersContainer'>
      <div className='diva'><JobOffers   title='UI/UX designer' postDate='3 days ' applicants='29'></JobOffers></div>
      <div className='diva'><JobOffers   title='Frontend Developer' postDate='2 days ' applicants='23'></JobOffers></div>
      <div className='diva'><JobOffers  title='Full stack developer' postDate='1 month' applicants='108'></JobOffers></div>
      <div className='diva'><JobOffers  title='Designer' postDate='12 days ' applicants='55'></JobOffers></div>
      <div className='diva'><JobOffers  title='Photographer' postDate='2 hours' applicants='22'></JobOffers></div>
      <div className='diva'><JobOffers  title='Backend developer' postDate='3 minutes' applicants='0'></JobOffers></div>
      <div className='diva'><JobOffers   title='UI/UX designer' postDate='1 hour' applicants='2'></JobOffers></div>
      </div>
      </div>
       
      </div> 
    </>
    )

}
export default JobOffersPage;