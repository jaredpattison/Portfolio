import React from 'react';

const BulletPoint = props => {

  return (
    <div className="bullet-point">
        I AM A <span>{props.content.title}</span>{props.content.copy}
    </div>
  )
  
}

export default BulletPoint
