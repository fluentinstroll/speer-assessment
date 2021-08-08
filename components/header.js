import styles from '../styles/Header.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';


export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles['header-container']}>
        <input type="checkbox" className={styles['menu-toggle']} />
        <label className={styles['trigger']} htmlFor="menu-toggle"></label>
        <label className={styles['burger']} htmlFor="menu-toggle"></label>
        <ul id="menu">
          <li className={styles['link-list']}>
            <a href="/" className={styles['ham-link']}>
              Home
            </a>
          </li>
          <li className={styles['link-list']}>
            <a href="/pricing" className={styles['ham-link']}>
              Pricing
            </a>
          </li>
          <li className={styles['link-list']}>
            <a href="/reviews" className={styles['ham-link']}>
              Reviews
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
