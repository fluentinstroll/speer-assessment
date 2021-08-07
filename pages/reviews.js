import styles from '../styles/Reviews.module.css';
import { ImStarFull } from 'react-icons/im';
import { IconContext } from "react-icons";
//TODO: add button
export default function Reviews() {
  return (
    <div className={styles['reviews-main']}>
      <div className={styles['reviews-content']}>
        <img src="/media/media2.png" className={styles['reviews-image']}/>
        <div>
          <h1 className={styles['reviews-header']}>REVIEWS</h1>
          <div className={styles['reviews-container']}>
            <div className={styles['review']}>
            <IconContext.Provider value={{ size: "3em" }}>
              <ImStarFull />
              <ImStarFull  />
              <ImStarFull  />
              <ImStarFull />
              <ImStarFull/>
              </IconContext.Provider>
              <h2 className={styles['reviews-statement']}>ARTIST</h2>
              <h4>"Love it, it's the best. I can't live without it!"</h4>
            </div>
            <div className={styles['review']}>
            <IconContext.Provider value={{ size: "3em" }}>
            <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              </IconContext.Provider>
              <h2 className={styles['reviews-statement']}>PRODUCER</h2>
              <h4>"Love it, it's the best. I can't live without it!"</h4>
            </div>
            <div className={styles['review']}>
            <IconContext.Provider value={{ size: "3em" }}>
            <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              </IconContext.Provider>
              <h2 className={styles['reviews-statement']}>MUSIC FAN</h2>
              <h4>"Love it, it's the best. I can't live without it!"</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
