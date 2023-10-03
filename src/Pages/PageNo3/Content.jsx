import React from 'react';
import Crousel from '../../Components/Crousel';
import {RiBubbleChartFill } from "react-icons/ri";

const Content = () => {
  return (
    <div className='mt-5'>
      <p className='text-info d-flex justify-content-center'> <RiBubbleChartFill style={{color:"blue"}}/>Meet The Team <RiBubbleChartFill style={{color:"blue"}}/>
      </p>
      <h3 className='text-dark d-flex justify-content-center fw-bold mb-5'>Techno Honorable Members</h3>
      <div>
        <Crousel/>
    </div></div>
  )
}

export default Content
