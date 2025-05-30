import React from 'react';
import Iconnot from '../assets/Iconnot.png';
import './UserSection.css';

function UserSection( props) {

  return (
    <div className="user-section">
      <div className="notification">
        <i className="fa fa-bell"></i>
        <img className='iconnot' src="../assets/Iconnot.png" alt="p" />
        {props.notificationCount > 0 && <span className="badge">{props.notificationCount}</span>}
      </div>
      <p>{props.userName}</p>
      
          </div>
  );
}

export default UserSection;
