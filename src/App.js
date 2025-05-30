import React from 'react';
import CompleteProfile from './CompleteProfile'; // Import the CompleteProfile component
import  StateButton from './Components/StateButton';
import JobCard from './Components/JobCard';
import {createBrowserRouter} from "react-router-dom";
import OffersDropdown from './Components/OffersDropdown';
import Home from "./JobOffersPage";
import OffersPage from './OffersPage';
import JobOffersPage from './JobOffersPage';
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
      <JobOffersPage></JobOffersPage>
      {/* <OffersPage></OffersPage> */}
    </div>
  );
}
export default App;

