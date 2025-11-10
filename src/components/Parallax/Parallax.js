import React from 'react'

const Parallax = ({ bg, tag }) => {

  return (
    <div 
    className='parallax darken'
    style ={{backgroundImage: `url(${bg})`}}
    >
      <p>{ tag }</p>
    </div>
  )

}

export default Parallax;
