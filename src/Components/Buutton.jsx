import React from 'react'

const Buutton = ({backgroundGradient ,textColor ,text, font}) => {
    const ButtonStyle = {
      background: backgroundGradient || 'transparent',
        color: textColor || 'black',
        fontWeight: font === 'bold' ? 'bold' : 'normal',
      };
      

  return (
    <button type="button" className="btn btn-secondary px-4" style={ButtonStyle}>{text}</button>
  )
}

export default Buutton
