import React from 'react';
import './StateButtonPlus.css'
function StateButtonPlus(props){
    return (
      <>
      
    <div className='btnPlus-container'>

    {/* <button style={" background={ props.bg} , border = {props.bd} , color ={props.cl}"}>* }*/ }
    <button class="tag" style={
        {color:props.color , background:props.background, border:props.bcolor}
    }>{props.tag}</button>
    <button className="btnPlus1"  >
       <span class="Plus-icon">+</span>
       <span>Part time</span>
    </button>

    <button className="btnPlus2" >
       <span class="Plus-icon">+</span>
       <span>Payed</span>
    </button>
</div>

    <button className="btnPlus3" >
       <span class="Plus-icon">+</span>
       <span>Internship</span>
    </button>
</>
     
    )
}
export default StateButtonPlus;