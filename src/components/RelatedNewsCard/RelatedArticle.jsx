
import React from 'react';
import Image from 'next/image';
import styles from './RelatedArticle.module.css'; // Import the CSS module for styling

const RelatedArticle = ({ id, title, content, imageLink, postedAt }) => {
    // console.log(imageLink,'img link')
  return (
    <div className={styles['news-card']} key={id}>
      {/* <Image src={imageLink} alt={title} className={styles['news-image']} width={150} height={150}/> */}
      <div className={styles['news-content']}>
        <div className={styles["upper"]}>
        <h2 className={styles['news-title']}>{title}</h2>
              <Image src={imageLink} alt={title} className={styles['news-image']} width={150} height={150}/>

        </div>
        <p className={styles['news-description']}>{content}</p>
        <p className={styles['posted-at']}>Posted at: {postedAt}</p>
      </div>
    </div>
  );
};

export default RelatedArticle;
