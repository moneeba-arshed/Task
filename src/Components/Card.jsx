import React from 'react'

const Card = ({ title, content, Image, isActive, imageWidth, imageHeight, marginT, marginB }) => {
  // Define Cardmargin before using it
  const Cardmargin = {
    marginTop: marginT || '',
    marginBottom: marginB || '',
  }

  const cardClasses = `card ${isActive ? 'active' : ''} ${Cardmargin.className || ''}`;
  const imageStyle = {
    width: imageWidth || '100px',
    height: imageHeight || '100px',
  };

  return (
    <div className={`card ms-3 d-flex align-items-center justify-content-center shadow mb-5 rounded ${cardClasses}`} style={{ width: "18rem", border: "none" }}>
      <img src={Image} className="card-img-top" alt="..." style={imageStyle} />
      <div className="card-body px-4">
        <h5 className="card-title text-dark d-flex justify-content-center">{title}</h5>
        <p className="card-text text-muted flex-wrap d-flex justify-content-center" style={{ lineHeight: "24px" }}>{content}</p>
      </div>
    </div>
  )
}

export default Card
