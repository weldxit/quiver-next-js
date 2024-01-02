// components/LoadingIndicator.js
import styles from '../loader.module.css';

const LoadingIndicator = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderBackground}></div>
      <div className={styles.loaderText}>Loading !!!...</div>
    </div>
  );
};

export default LoadingIndicator;
