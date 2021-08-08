import styles from '../styles/Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

//TODO: add animation and menu on hamburger click
export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles['header-container']}>
          <p className={styles['header-text']}><GiHamburgerMenu /> EXP | CON</p>
        </div>
    </div>
  );
}
