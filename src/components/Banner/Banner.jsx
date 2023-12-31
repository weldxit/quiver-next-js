// components/Banner.js
'use client'
import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css'; // Your CSS file for the Banner

const Banner = () => {
  // Sample weather data (replace this with your weather data)
  const weatherData = {
    temperature: '25°C',
    condition: 'Sunny',
  };

  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <Image src="/path_to_your_image.jpg" alt="Your Image" width={100} height={80}/>
      </div>
      <div className={styles.center}>
        <h1>Your Heading Text</h1>
      </div>
      <div className={styles.right}>
        <p>Weather:</p>
        <p>Temperature: {weatherData.temperature}</p>
        <p>Condition: {weatherData.condition}</p>
      </div>
    </div>
  );
};

export default Banner;
