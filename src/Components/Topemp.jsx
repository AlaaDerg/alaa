import React from 'react';
import './Topemp.css';
import LogoSection from './LogoSection';
function Topemp(props) {
  return (
     <>
     <div className="allemp">
     <div className='logoemp' >
      <LogoSection  />
      </div>
        <div className="linksemp">
            <div className="dash">
            <a className='dasht' style={{ color: props.dashcolor }} href="###"> Dashboard</a>               <div className='icndash'>
               <svg xmlns="http://www.w3.org/2000/svg" color={props.dashcolor} width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2zm12-2h6a2 2 0 0 1 2 2v5h-8zm0 11h8v5a2 2 0 0 1-2 2h-6z"/></svg>
               </div> 
            </div>
            <div className="offer">
              <div className='icnoff'>
              <svg xmlns="http://www.w3.org/2000/svg" color={props.offercolor}  width="28" height="28" viewBox="0 0 16 16"><path fill="currentColor" d="M13 10.085a1.5 1.5 0 0 1 1 1.415v.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.5a1.5 1.5 0 0 1 1-1.415V3.5A1.5 1.5 0 0 1 4.5 2h5A1.5 1.5 0 0 1 11 3.5V10h1V4.085A1.5 1.5 0 0 1 13 5.5zm-3-.792V3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V5h1.086a1.5 1.5 0 0 1 1.06.44zM3 6.5V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.5a.5.5 0 0 0-.5-.5h-1.586a1.5 1.5 0 0 1-1.06-.44L5.439 6.147A.5.5 0 0 0 5.086 6H3.5a.5.5 0 0 0-.5.5"/></svg>
            </div>
               <a className='offt' style={{ color: props.offercolor }}   href="###">Offers</a>
            </div>
            <div className="allapp">
              <div className='icnapp'>
              <svg xmlns="http://www.w3.org/2000/svg" color={props.appcolor}  width="28" height="28"  viewBox="0 0 16 16"><path fill="currentColor" d="M14 6a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3H5a1 1 0 0 0 1 1h4.21A3.79 3.79 0 0 0 14 11.21zM4.997 1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H10a2 2 0 0 0 2-2V5.5h-.002V4.414a1.5 1.5 0 0 0-.44-1.06L9.645 1.439A1.5 1.5 0 0 0 8.584 1zM10 12H4.998a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5v1.061H11V11a1 1 0 0 1-1 1m.79-8H9.499a.5.5 0 0 1-.5-.5V2.207z"/></svg>

                </div>              
               <a className='appt'style={{ color: props.appcolor }}   href="###"> All application</a>
            </div>

        </div>
        {/* <div className="vide">

        </div> */}
        <div className="logemp">
        <img className='icnlog' src="Iconlog.png" alt="" />
              
            <a className='logt' href="###">Log out</a>
        </div>
        </div>
      </>
    )
}

export default Topemp;