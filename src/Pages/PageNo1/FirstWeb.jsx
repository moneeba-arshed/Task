import React from 'react'
import FirstNavbar from './FirstNavbar'
import Content from './Content'

const FirstWeb = () => {
  return (
    <div className='container-fluid vh-100 vw-100 main'>
        <div className='row'>
        <FirstNavbar/>  
        </div>
  <div className='row'>
  <Content/> 
  </div>
 
    </div>
  )
}

export default FirstWeb
