import React, { useState } from 'react';
import './DashboardEmp.css';
import ContinueButton2 from './Components/ContinueButton2';
import PopUp from './Components/PopUp';
import Topemp from './Components/Topemp';
import Navemp from './Components/Navemp';
import Shape from "./assets/Shape.png";
import Docu from "./assets/Docu.png";
import monhana from './assets/monhana.png';
import icon from './assets/Icon.png';
import iconn from './assets/Icon.svg';
import icona from "./assets/Icona.svg";
import imac from './assets/iMac.svg';



// Import icons
import { FaBriefcase, FaUsers, FaUserTie, FaUserCheck } from 'react-icons/fa';

function DashboardEmp(props) {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className='thePage'>
            <div className='leftSside'>
                <Topemp />
            </div>
            
            <div className='rightSside'>
                <div className='Navve'>
                    <Navemp />
                </div>
                <div className='UpperSection'>
                    <p className='overviewTitle'>Overview</p>
                    <div className='addOfferBtn'>
                        <ContinueButton2 
                            onClick={() => setShowPopup(true)} 
                            className='myButtonOff' 
                            imge='plus.png' 
                            width='140px' 
                            text3='Add offer'
                        />
                    </div>
                </div>

                <div className='statsContainer'>
                    
                    <div className='statCard'>
                        
                        <div className='statContent'>
                            <p className='statTitle'>Total Jobs</p>
                            <div className='secondDiv'><h2 className='statValue'>{props.val}</h2>
                            <p className='statChange'>{props.percentage}%</p></div>
                             <p className='statlenght'>vs last month</p>

                        </div>
                        <div className='iconContainer'>
                            <img src={iconn} alt="" />
                        </div>
                    </div>

                    <div className='statCard'>
                        
                        <div className='statContent'>
                            <p className='statTitle'>Total Application</p>
                            <div className='secondDiv'><h2 className='statValue'>{props.val1}</h2>
                            <p className='statChange'>{props.percentage1}%</p></div>
                            <p className='statlenght'>vs last month</p>
                        </div>
                       <div className='iconContainer'>
                            <img src={icona} alt="" />
                        </div>
                    </div>

                    <div className='statCard'>
                       
                        <div className='statContent'>
                            <p className='statTitle'>Total Interviews</p>
                            <div className='secondDiv'><h2 className='statValue'>{props.val2}</h2>
                            <p className='statChange'>{props.percentage2}%</p></div>
                            <p className='statlenght'>vs last month</p>

                        </div>
                         <div className='iconContainer'>
                            <img src={imac} alt="" />
                        </div>
                    </div>

                    <div className='statCard'>
                        
                        <div className='statContent'>
                            <p className='statTitle'>Total hiring</p>
                            <div className='secondDiv'><h2 className='statValue'>{props.val3}</h2>
                            <p className='statChange'>{props.percentage3}%</p></div>
                            <p className='statlenght'>vs last month</p>
                        </div>
                        <div className='iconContainer'>
                            <img src={icona} alt="" />
                        </div>
                    </div>
                </div>

                <div className='chartsContainer'>
                    <div className='hiringRate'>
                        <div className='chartHeader'>
                            <h3>Hiring rate</h3>
                            <p>From all Jobs</p>
                        </div>
                        <div className='circleChart'>
                            <div className='progressCircle' style={(props.background)}>
                                <span className='progressValue'>{props.per}%</span>
                            </div>
                        </div>
                    </div>

                    <div className='applicationsOverview'>
                        <div className='chartHeader'>
                            <h3>Applications overview</h3>
                            <p>2024</p>
                        </div>
                        <div className='lineChartContainer'>
                            <img src={monhana}></img>
                        </div>
                    </div>
                </div>

                {showPopup && <PopUp onClose={() => setShowPopup(false)} />}
            </div>
        </div>
    );
}

export default DashboardEmp;