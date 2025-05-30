// import React, { useState, useEffect, useContext } from 'react';
// import { Button, Card, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// import "../styles/Signup.css";
// import Label from "../components/Label";
// import ContinueButton from "../components/ContinueButton";
// import googleLogo from "../assets/google.png";
// import leftImage from "../assets/left.png";
// import { Link } from "react-router-dom";

// import RegisterContextProvider, { RegisterContext } from '../context/RegisterContext'


// const UserRegister = () => {
//   const [role, setRole] = useState()

//   // const [values, setValues] = useState({
//   //   name: '',
//   //   email: '',
//   //   password: '',
//   //   verified: 'false',
//   //   role: ''
//   // });

//   const {values, setValues} = useContext(RegisterContext);



//   const handleRole = (selectedRole) => {
//     setRole(selectedRole)
//     setValues((prev) => ({
//       ...prev,
//       role: selectedRole
//     }))
//     // console.log(values.role)
//   }

//   // const handleChange = (e) => {
//   //   setValues({
//   //     ...values,
//   //     [e.target.name]: e.target.value
//   //   });
//   // };

//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     console.log('Submitted:', values);
//     e.preventDefault();
//     console.log('Submitted:', values);
//     // TODO: Send values to backend
//     axios.post('http://localhost:5000/register', values)
//     .then(res => {
//       if (res.data.Status === "Success") {
//         navigate('/login')
//       } else {
//         alert("Error");
//       }
//     })
//     .then(err => console.log(err));
//   };

//   // useEffect(() => {
//   //   console.log('Updated values:', values);
//   // }, [values]);
  

//   return (
   
    
//     <div className="signup-page">
//       <div className="signup-left">
//         <img src={leftImage} alt="signup visual" />
//       </div>
//       <div className="signup-right">
//         <form onSubmit={handleSubmit}>
//         <h2 className="signup-title">Sign up as</h2>
//         <div className="role-switch">
//         <button type='button' onClick={() => handleRole('candidate')} className={`btn ${values.role === 'candidate' ? 'btn-primary' : 'btn-outline-primary'}`}
//             >Candidate </button>
//             <button type='button' onClick={() => handleRole('employer')} className={`btn ${values.role === 'employer' ? 'btn-primary' : 'btn-outline-primary'}`}
//             >Employer</button>
//           </div>

//         <div className="google-signup">
//           <img src={googleLogo} alt="Google logo" />
//           <span>Sign up with Google</span>
//         </div>

//         <div className="separator">
//           <hr />
//           <span>Or sign up with email</span>
//           <hr />
//         </div>

//         <Label type='text' name='name' title="Full name" placeholder="Enter your full name" />
//         <Label type='email' name='email' title="Email address" placeholder="Enter your Email"  />
//         <Label type='password' name='password' title="Password" placeholder="Enter your password" />

//         <ContinueButton type='submit' text="Continue" onClick={handleSubmit} />

//         <p className="signup-switch">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>

//         </form>
//       </div>
//     </div>
   
//   );
// };

// export default UserRegister;