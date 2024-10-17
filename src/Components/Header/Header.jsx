import Logo from "../Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>

        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <ul className={styles.navigation}>
          <li className={styles.navItem}><a href="">OUR STORY</a></li>
          <li className={styles.navItem}><a href="">PHOTOS ALBUM</a></li>
          <li className={styles.navItem}><a href="">CONTACT</a></li>
          <li className={styles.navItem}><a href="">MENU</a></li>
        </ul>
        </div>
        <div className={styles.headerRight}>
          <a className={styles.navItem} href="">DIRECTION</a>
        </div>
      </div>
    </header>
  );
}
