// components/ThankYouCard.js
'use client'    
import { useState } from 'react';
import styles from './Thankyou.module.css'

const ThankYouCard = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleShowConfetti = () => {
    setShowConfetti(true);
    // You can trigger additional actions/animations here
    // e.g., play sound effects, add more animations, etc.
  };

  return (
    <div className={styles.card} onClick={handleShowConfetti}>
      <h1>Thank You!</h1>
      {showConfetti && <ConfettiAnimation />} {/* Your confetti animation component */}
    </div>
  );
};

const ConfettiAnimation = () => {
  // Implement your confetti animation here
  // You can use libraries like react-confetti or create your animation component
  return (
    <div className={styles.confetti}>
      {/* Your confetti animation */}
    </div>
  );
};

export default ThankYouCard;
