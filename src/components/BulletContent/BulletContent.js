import React from 'react';
import content from './content.json';
import BulletPoint from '../BulletPoint';

const BulletContent = () => {
  return <div className="bullet-container">{content.map( (point, i) => <BulletPoint key={i} content={point} />)}</div>;
};

export default BulletContent;
