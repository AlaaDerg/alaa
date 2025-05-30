// import {React, useContext} from "react";
// import "./Label.css";
// import { RegisterContext } from "../context/RegisterContext";
// import { LoginContext } from "../context/LoginContext";
// import { CompleteProfileContext } from "../context/CompleteProfileContext";

// const Label = ({ type, name, title, placeholder }) => {

//     const registerContext = useContext(RegisterContext);
//     const loginContext = useContext(LoginContext);
//     const completeProfileContext = useContext(CompleteProfileContext);

//     const context = registerContext || loginContext || completeProfileContext;

//     const { values, setValues} = context
  

//   const handleChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value
//     });
//     console.log(values)
//   };


//   return (
//     <div className="label-container">
//       <label className="label-title">{title}</label>
//       <input className="label-input" type={type} placeholder={placeholder} name={name} onChange={handleChange} />
//     </div>
//   );
// }

// export default Label;