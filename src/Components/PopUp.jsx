import React from "react";
import './PopUp.css';
// import Label from './Label.jsx';
import ContinueButton2 from "./ContinueButton2";

function PopUp({ onClose }){
    return(
        <div className="popup-overlay">
            <div className="myPopup">
                <div className="bigTitle">Add offer</div>
                
                <div className="labelContainer">
                    <label className="labelTitle">Title</label>
                    <div className="inputContainer">
                        <input className="titleInp" type="text" placeholder="Place holder" />
                    </div>
                </div>

                <div className="labelContainer">
                    <label className="labelTitle">Offer type</label>
                    <div className="inputContainer">
                        <select className="titleInp">
                            <option value="" disabled selected>Place holder</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="internship">Internship</option>
                            <option value="payed">Payed</option>
                        </select>
                    </div>
                </div>

                <div className="labelContainer">
                    <label className="labelTitle">Description</label>
                    <div className="inputContainer">
                        <textarea 
                            className="titleInp" 
                            placeholder="Add your motivation"
                            rows="3"
                        />
                    </div>
                </div>

                <div className="labelContainer">
                    <label className="labelTitle">Salary</label>
                    <div className="inputContainer">
                        <input className="titleInp" type="text" placeholder="Place holder" />
                    </div>
                </div>

                <div className="labelContainer">
                    <label className="labelTitle">Requirements</label>
                    <div className="inputContainer">
                        <textarea 
                            className="titleInp" 
                            placeholder="Add your motivation"
                            rows="3"
                        />
                    </div>
                </div>

                <div className="btns">
                    <ContinueButton2 
                        className='btn1'
                        width='100%'
                        height='44px'
                        text3='Cancel'
                        background='#FFF'
                        color='#003b99'
                        onClick={onClose}
                    />
                    <ContinueButton2 
                        className='btn2'
                        width='100%'
                        height='44px'
                        text3='Post'
                        background='#003b99'
                        color='#FFF'
                    />
                </div>
            </div>
        </div>
    );
}

export default PopUp;