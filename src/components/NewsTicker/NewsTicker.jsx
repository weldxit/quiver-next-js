import React from 'react';
import styles from './Newsticker.module.css'; // Your CSS file for the NewsTicker

const NewsTicker = ({ news }) => {
  return (
    <div className={styles.newsTicker}>
      <ul className={styles.newsList}>
        {news.map((item, index) => (
          <li key={index} className={styles.newsItem}>
            <span style={{color:"red"}}>{'\u2022'}</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsTicker;
