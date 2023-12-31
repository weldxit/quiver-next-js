  import React from 'react'
  import styles from './page.module.css'
  export default function NotFound() {
    return (
      <div className={styles.loaderContainer}>
      <div className={styles.loaderBackground}></div>
      <div className={styles.loaderText}>Page Not Found !</div>
    </div>
    )
  }
