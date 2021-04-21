import React from 'react';
import pic404 from '../assets/not-found.jpg';

const NotFound = () => {
  return (
    <div className="not-found__container">
      <img src={pic404} alt="page not found" />
    </div>
  )
}

export default NotFound;
