// Based off of youtube tutorial https://www.youtube.com/watch?v=LMagNcngvcU //

import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="eventrade__features-container__feature">
    <div className="eventrade__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="eventrade__features-container__feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature