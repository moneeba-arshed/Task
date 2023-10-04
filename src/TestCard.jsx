import React from 'react';

const TestCard = () => {


  return (
    <div className={`card ms-3 d-flex align-items-center justify-content-center shadow mb-5 rounded ${cardClasses}`} style={{ ...cardPaddingStyle, width: "18rem", border: "none" }}>
      <img src={Card1} className="card-img-top" alt="..." style={imageStyle} />
      <div className="card-body px-4">
        <h5 className="card-title text-dark d-flex justify-content-center">{title}</h5>
        <p className="card-text text-muted flex-wrap d-flex justify-content-center" style={{ lineHeight: "24px" }}>{content}</p>
      </div>
    </div>
  );
}

export default TestCard;
