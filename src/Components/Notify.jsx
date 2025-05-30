import React from 'react';
import { useState } from 'react';
import './Notify.css';
import ContinueButton2 from './ContinueButton2';
function Notify(){
  return(
  <div className='parnt'>
      <div className='notifyContainer'>
       <h4 className='ttl'>We are waiting for your answer on  job </h4>
        <p className='prg'>Hey dear, we would love to see if you like to start working with us.</p>
        <div className='myBtns'>
        <ContinueButton2 text3='Decline' width='280px' background='#FFF' color='#0C4498'></ContinueButton2>
        <ContinueButton2 text3='Approved' width='280px'></ContinueButton2>
        </div>
      </div>
  </div>

  )
  

};

export default Notify;