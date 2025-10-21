import React from 'react';

interface TrustInfoProps {
  image: string;
  alt: string;
  text: string;
  highlight: string;
}

const TrustInfo: React.FC<TrustInfoProps> = ({ image, alt, text, highlight }) => {
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