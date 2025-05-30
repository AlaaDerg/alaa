import React from 'react';
import './JobOffers.css'
import StateButtonPlus from './StateButtonPlus';
function JobOffers(props){
    return (
   <>
    <div class="job-offer">
        <div class="job-header">
            <div class="job-title-container">
                <div class="job-logo"><img src={props.imageUrl1}/> </div>
                <div class="job-title">{props.title}</div>
            </div>
            <button class="menu-btn">⋮</button>
        </div>
        
        <div class="tags-container">
            <StateButtonPlus tag='live' color='green' background='#D1FADF' bcolor='1px solid green' ></StateButtonPlus>
            
        </div>
        
        <div class="job-meta">
            <div class="post-date">posted {props.postDate} ago</div>
            <div class="applicants">Applicants <span>{props.applicants}</span></div>
        </div>
    </div>

   </>

    )}
    export default JobOffers ;