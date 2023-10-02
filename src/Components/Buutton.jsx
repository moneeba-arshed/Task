import React from 'react'

const Buutton = ({backgroundColor ,textColor ,text, font}) => {
    const ButtonStyle = {
        backgroundColor: backgroundColor || 'transparent',
        color: textColor || 'black',
        fontWeight: font === 'bold' ? 'bold' : 'normal',
      };
      

  return (
    <button type="button" className="btn btn-secondary px-4" style={ButtonStyle}>{text}</button>
  )
}

export default Buutton
