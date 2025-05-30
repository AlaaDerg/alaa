import React from 'react';
import './StateButton.css'
function StateButton(){
    return (
    <div className='btn-container'>

    <button className="btn" >
       <span class="plus-icon">+</span>
       <span>Part time</span>
    </button>

    <button className="btn" >
       <span class="plus-icon">+</span>
       <span>Payed</span>
    </button>

    <button className="btn" >
       <span class="plus-icon">+</span>
       <span>Job</span>
    </button>


     </div>
     
    )
}
export default StateButton;