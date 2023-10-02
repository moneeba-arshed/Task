import React from 'react'
import Card from '../../Components/Card'
import creativestrategy from '../../Images/creativestrategy.png'; 
import Vinterface from '../../Images/Vinterface.png';
import innovative from '../../Images/innovative.png';
import visual from '../../Images/visual.png';
import Buutton from '../../Components/Buutton';
import {RiBubbleChartFill } from "react-icons/ri";
const Content = () => {
  return (
    <div className='container-fluid ps-5 mt-5 pt-5'>
    <div className=' sevices m-0 ms-3 mt-5 mb-4'>
    <div className='d-flex'> <RiBubbleChartFill style={{color:"blue"}}/>
    <p className='m-0 ms-1 text-info '>Our Services</p>
     </div> 
      
      <div className='d-flex justify-content-between pe-5'>
        <h2 className='text-dark'>Techno Featured Service</h2>
       
<Buutton text="All Service →" backgroundColor="blue" textColor="white" />
      </div>
    
</div>
<div className='d-flex'>
<Card  title="Content Stratagy" content="Monotonectally actualize in customers a methodologie rather done." Image={creativestrategy} paddingTop="25px" paddingBottom="25px"  marginB="25px" />
<Card isActive={true}  title="Visual Interface" content="Monotonectally actualize in customers a methodologie rather done." paddingTop="25px" paddingBottom="25px"  Image={Vinterface}/>
<Card  title="Inovate Thinking" content="Monotonectally actualize in customers a methodologie rather done." paddingTop="25px" paddingBottom="25px"  Image={innovative}/>
<Card  title="Visual Interface" content="Monotonectally actualize in customers a methodologie rather done." paddingTop="25px" paddingBottom="25px" Image={visual}/>
</div>
    </div>
  )
}

export default Content
