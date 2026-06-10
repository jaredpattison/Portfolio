import React from 'react';

const BulletPoint = props => {
  return (
    <div className="bullet-point">
      <span>{props.content.title}</span>{props.content.copy}
    </div>
  );
};

export default BulletPoint;
