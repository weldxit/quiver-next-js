import React from 'react'
import styles from './Norecord.module.css'

export default function Norecord() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderBackground}></div>
      <div className={styles.loaderText}>No Records Found !</div>
    </div>
  )
}
