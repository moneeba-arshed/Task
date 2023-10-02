import React from "react";
import { BsTelephonePlus } from "react-icons/bs";
import Buutton from '../../Components/Buutton';

const Content = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-6 offset-md-1 text-white" style={{marginTop:"10%"}}>
          <div className="align-content">
            <p className="d-flex justify-content-start">For IT Startup Business</p>
            <h1 className="align">Reach the Limits with New Startup Business</h1>
            <p className="d-flex justify-content-start mt-4">Globally developed unique technologies low-risk high productive.</p>
          </div>
          <div className="d-flex mt-5 mb-5">
            <Buutton text="Start a Project →" textColor="white" backgroundColor="#63C7EF"/>
            <div className="d-flex align-items-center ms-4">
              <div className="circle-container"><BsTelephonePlus className="tel-icon" /></div>
              <div className="ms-2">
                <p className=" d-flex justify-content-start  mb-2">Call for Help</p>
                <p className=" d-flex justify-content-start m-0 fw-bold">+98 321 (7690) 326</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
