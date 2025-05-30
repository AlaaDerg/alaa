import './UploadButton.css';
//import { FiUpload } from 'react-icons/fi';

function UploadButton(){
   
return  <>
 <div className='UploadButtonContainer'>
   <input 
    className="UploadButton"
    type="file"
    placeholder="Upload graduation certificate"
   />
   <img src='/Icon.png' className='upload-icon'/>
   <span>Upload graduation certificate</span>
 </div>
  </> 
}
export default UploadButton;