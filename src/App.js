import React from 'react';
import CompleteProfile from './CompleteProfile'; // Import the CompleteProfile component
import  StateButton from './Components/StateButton';
import JobCard from './Components/JobCard';
import {createBrowserRouter} from "react-router-dom";
import OffersDropdown from './Components/OffersDropdown';
import Home from "./JobOffersPage";
import OffersPage from './OffersPage';
import JobOffersPage from './JobOffersPage';
import DashboardEmp from './DashboardEmp';
import Notify from './Components/Notify';

import './styles/fonts.css';  // Adjust path as needed
// export const router = createBrowserRouter([
//   {
//     path: "/CompletProfile",
//     element: <CompleteProfile />,
//   },
//   {
//     path: "/",
//     element: <Home />, 
//   },
// ]);
function App(){
  return (
    <div className="App">

      <Notify
      
      ></Notify>
      {/* <DashboardEmp val='236' percentage='+33' val1='23' percentage1='+4'
        val2='13' percentage2='-5' 
        val3='3' percentage3='+41'      
        per='45'
      ></DashboardEmp> */}
      {/* <JobOffersPage></JobOffersPage> */}
      {/* <OffersPage></OffersPage> */}
    </div>
  );
}
export default App;

