import React from 'react';
import {TiSocialFacebook,TiSocialLinkedin} from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";

const Card = ({ title, content, Image, isActive, imageWidth, imageHeight, paddingTop, paddingBottom }) => {
  const cardClasses = `card ${isActive ? 'active' : ''}`;
  const imageStyle = {
    width: imageWidth || '100px',
    height: imageHeight || '100px',
  };

  const cardPaddingStyle = {
    paddingTop: paddingTop || '0',
    paddingBottom: paddingBottom || '0',
  };

  return (
    <div className={`card ms-3 d-flex align-items-center justify-content-center shadow mb-5 rounded ${cardClasses}`} style={{ ...cardPaddingStyle, width: "18rem", border: "none" }}>
      
     <div className='card-container'>
  <img src={Image} className="card-img-top" alt="..." style={imageStyle} />
  <div className='icons'>
    <TiSocialFacebook className='icon px-2' color='blue' size={35} />
    <AiOutlineTwitter className='icon mx-2 px-2' color='07DEF0' size={35} />
    <TiSocialLinkedin className='icon px-2' color='red' size={35} />
  </div>
</div>
      <div className="card-body px-4">
        <h5 className="card-title text-dark d-flex justify-content-center">{title}</h5>
        <p className="card-text text-muted flex-wrap d-flex justify-content-center" style={{ lineHeight: "24px" }}>{content}</p>
      </div>
    </div>
  );
}

export default Card;
