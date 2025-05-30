
import React from "react";
import './ContinueButton3.css'


function ContinueButton3(props) {
  return (<>
  <button className="continue-btn" style={{width: props.width, backgroundColor: props.background ,color:props.color  ,height:props.height}} onClick={props.onClick}>
    <img src={props.imge}/>
    {props.text3}
  </button>
  </>
   
  )
}

export default ContinueButton3;