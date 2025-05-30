import React from 'react'
import './Navemp.css'
import UserSection from './UserSection'

function Navemp(props) {
  return (
<>
<div className='navemp'>
    <div className='welcome' > 
        <p>hello {props.name} , welcome back!!</p>

    </div>
    <div className='useemp'> 
        <UserSection  userName="Soltani Abir" 
             
               notificationCount={1} >

               </UserSection>
    </div>
    </div>

</>  )
}

export default Navemp;