// components/Banner.js
'use client'
import React from 'react';
import styles from './Banner.module.css'; // Your CSS file for the Banner

const Banner = () => {
  return (
    <div className={styles.banner}>
    
      <div className={styles.center}>
        <h1 className={styles['banner-title']}>The Quiver</h1>
        <span className={styles['tag']}>The Vibe Of Change | ପରିବର୍ତ୍ତନର କମ୍ପନ !</span>
      </div>

    </div>
  );
};

export default Banner;
