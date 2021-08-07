import styles from '../styles/Pricing.module.css';
import { BsMusicNote } from 'react-icons/bs';

export default function Pricing() {
  return (
    <div className={styles['pricing-main']}>
      <h1 style={{ color: 'white' }}>PRICING</h1>
      <h2 style={{ color: 'white' }}>
        Test out our app today! Choose from three subscription-based payment
        models.
      </h2>
      <div className={styles['pricing-container']}>
        <div className={styles['pricing-info']}>
          <div className={styles['pricing-important1']}>
            <p className={styles['pricing-fonts']}>BASIC</p>
            <p className={styles['pricing-fonts']}>_____</p>
            <p className={styles['pricing-fonts']}>MONTHLY</p>

            <h1 className={styles['pricing-h1']}>$9</h1>
          </div>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Very good
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Amazing
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Perfect job
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Love this
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> It's so good
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Features
          </p>
          <button> SELECT </button>
        </div>
        <div className={styles['pricing-info']}>
          <div className={styles['pricing-important2']}>
            <p className={styles['pricing-fonts']}>ADVANCED</p>
            <p className={styles['pricing-fonts']}>_____</p>
            <p className={styles['pricing-fonts']}>YEARLY</p>
            <h1 className={styles['pricing-h1']}>$99</h1>
          </div>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Very very good
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Even Amazing
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Perfect job
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Love this more
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> It's so so good
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> More Features
          </p>
          <button> SELECT </button>
        </div>
        <div className={styles['pricing-info']}>
          <div className={styles['pricing-important3']}>
            <p className={styles['pricing-fonts']}>PRO</p>
            <p className={styles['pricing-fonts']}>_____</p>
            <p className={styles['pricing-fonts']}>YEARLY</p>

            <h1 className={styles['pricing-h1']}>$120</h1>
          </div>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Very very good
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Even more
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Perfect job
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> Love this more
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> It's so so good
          </p>
          <p className={styles['pricing-fonts']}>
            <BsMusicNote /> More Features
          </p>
          <button> SELECT </button>
        </div>
      </div>
    </div>
  );
}
