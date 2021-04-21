import React from 'react';

const ErrorMessage = ({errorMessage}) => {
  return (
    <div className="error-message__container">
      <p className="error-message__text">Error: {errorMessage}</p>
      <p className="error-message__text">Let's try it tomorrow</p>
    </div>
  )
}

export default ErrorMessage;
