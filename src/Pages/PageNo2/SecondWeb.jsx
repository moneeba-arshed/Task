import React from 'react'
import ServicesNavbar from './ServicesNavbar';
import Content from './Content'

const SecondWeb = () => {
  return (
        <div className='container-fluid'>
        <div className='row m-0'>
        <ServicesNavbar/>
        </div>
  <div className='row m-0'>
  <Content/>
  </div>
  </div>
  )
}

export default SecondWeb
