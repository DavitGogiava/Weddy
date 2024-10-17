import Image from "next/image";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerTextWrapper}>
        <h4 className={styles.footerText}>MEMORIES</h4>
        <p className={styles.footerTextTop}>REAL MOMENTS</p>
        <p className={styles.footerTextMiddle}>WEDDY</p>

        <p className={styles.footerTextBottom}>TIME STAMP</p>
      </div>
    </footer>
  );
}
