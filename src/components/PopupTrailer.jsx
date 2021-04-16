import React from 'react';

const PopupTrailer = ({closePopup, trailer}) => {
  return (
    <div className="trailer-overlay" onClick={closePopup}>
      <div className="trailer-container">
        <iframe 
          src={`https://www.youtube.com/embed/${trailer.videoId}`} 
          frameBorder="0" 
          allowFullScreen 
          className="trailer"
          title={trailer.title} />
      </div>
    </div>
  );
};

export default PopupTrailer;
