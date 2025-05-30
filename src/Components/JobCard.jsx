import React from 'react';
import './JobCard.css'
import StateButton from './StateButton';
import Bookmark from "../assets/Bookmark.png"
function JobCard(props){
return (<div className="card">
        <div className="card-header">
        
            <div className='logo'>fuse</div>
               
           
            <div className="job-info">
                <h3 className="job-title">{props.title}</h3>
                <p className="name">{props.name}</p>
            </div>
            <div className="match-container">
                <span className="match-text">70% Match</span>
                <div className="progress-circle"></div>
            </div>
        </div>
    {/* now body of card */}
     <p className='Job-description'>{props.JobDescription}</p>
     <StateButton></StateButton>
 

      <div className='applicantContainer'>
     <div className="applicants">
              < div className='applicants-count'>
                <p className="applicants-word">Applicants </p>
                <p className='Number'>{props.applicants}</p>
                </div>
                <p className="posted-time">posted {props.time} ago</p>
              
        </div>
            <div className="bookmark">
                <img src={Bookmark} alt="Bookmark" />
            </div>

        </div>     
    
  </div>)
}
JobCard.defaultProps = {
title :'IT Assistant',
name : 'Assia Zeghmar',
JobDescription : 'looking for a job' ,
applicants : 0,
time :'just now',
};
export default JobCard ;