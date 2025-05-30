import React from 'react';
import './LandingCards.css'
function LandingCards(){
    return(
   <>
      <div className='LandingCardsContainer1'>
      <p className='CardTitle'>for students</p>
      <p><span className='boldText'>Sign Up & Verify </span><span className='lightText'>– Scan your school ID for approval.</span></p>
      <p><span className='boldText'>Complete Your Profile</span><span className='lightText'> – Add your CV, skills, and interests.</span></p>
      <p><span className='boldText'>Find & Apply for Jobs </span><span className='lightText'>– Get matched with opportunities and apply.</span></p>
      <p><span className='boldText'>Interview & Get Hired </span><span className='lightText'>– Track your applications and receive updates.</span></p>
      </div>

      <div className='LandingCardsContainer2'>
      <p className='CardTitle'>for employers</p>
      <p><span className='boldText'>Sign Up & Verify </span><span className='lightText'>– Scan your ID for approval.</span></p>
      <p><span className='boldText'>Post a Job </span><span className='lightText'> – List your job openings.</span></p>
      <p><span className='boldText'>Review Applications </span><span className='lightText'>– Get applications from verified students.</span></p>
      <p><span className='boldText'>Hire Securely </span><span className='lightText'>– Approve students after interviews.</span></p>
      </div>

      <div className='LandingCardsContainer3'>
      <p className='CardTitle'>for students</p>
      <p><span className='blueStar'>*</span><span className='boldText'>Verified Jobs Only</span></p>
      <p><span className='blueStar'>*</span><span className='boldText'>Smart Matching </span></p>
      <p><span className='blueStar'>*</span><span className='boldText'>Quick Apply </span></p>
      <p><span className='blueStar'>*</span><span className='boldText'>Interview Updates </span></p>
      </div>

      <div className='LandingCardsContainer4'>
      <p className='CardTitle'>for employers</p>
      <p><span className='blueStar'>*</span><span className='boldText'> Find the Best Talent</span></p>
      <p><span className='blueStar'>*</span><span className='boldText'>Post Jobs in Minutes</span></p>
      <p><span className='blueStar'>*</span><span className='boldText'>Manage Applications Easily</span></p>
      <p><span className='blueStar'>*</span><span className='boldText'>Track Approved Hires </span></p>
      </div>

      

   </>
)
}
export default LandingCards;