
import React from 'react';
import Image from 'next/image';
import styles from './RelatedArticle.module.css'; // Import the CSS module for styling
function formatDate(timestamp) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(timestamp);

  // Format date as dd-MMM-yyyy (e.g., 12-Dec-2023)
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  // Format time as hr:minute am/pm
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const ampm = hour >= 12 ? "pm" : "am";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

  const formattedTime = `${formattedHour}:${minute} ${ampm}`;

  return { formattedDate, formattedTime };
}
const RelatedArticle = ({ id, title, content, imageLink, postedAt }) => {
  const { formattedDate, formattedTime } = formatDate(postedAt)

    // console.log(imageLink,'img link')
  return (
    <div className={styles['news-card']} key={id}>
      {/* <Image src={imageLink} alt={title} className={styles['news-image']} width={150} height={150}/> */}
      <div className={styles['news-content']}>
        <div className={styles["upper"]}>
        <h2 className={styles['news-title']}>{title}</h2>
              <Image src={imageLink} alt={title} className={styles['news-image']} width={150} height={180}/>

        </div>
        <p className={styles['news-description']}>{content}</p>
        <p className={styles['posted-at']}>Posted at : { formattedDate} | {formattedTime }</p>
      </div>
    </div>
  );
};

export default RelatedArticle;
