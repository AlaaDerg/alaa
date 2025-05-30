import React from "react";
import './ContinueButton.css';
function ContinueButton(props) {
  return (
   
    <button className="continue-btn">
      <p>{props.name}</p>
    </button>
   
  );
}
export default ContinueButton;


