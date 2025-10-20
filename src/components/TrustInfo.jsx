import React from 'react';

function TrustInfo({ image, text, highlight, alt }) {
  return (
    <div className='trust-info'>
      <img className='trust-images' src={image} alt={alt} />
      <p className='trust-messages'>
        {text}<span className='trust-messages-span'> {highlight}</span>
      </p>
    </div>
  );
}

export default TrustInfo;