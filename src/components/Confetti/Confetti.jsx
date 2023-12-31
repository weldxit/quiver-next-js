// components/Confetti.js
'use client'
import React from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  return (
    <Confetti
      width={800} // Width of the area where confetti falls
      height={600} // Height of the area where confetti falls
      numberOfPieces={300} // Number of confetti pieces
      recycle={true} // Whether confetti should recycle (fall again after disappearing)
      gravity={0.1} // Gravity effect
      style={{position:'relative',width:1100, height:300}}
    />
  );
};

export default ConfettiComponent;
