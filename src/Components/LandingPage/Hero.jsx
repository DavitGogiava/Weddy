import Image from "next/image";

export default function Hero({ styles }) {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.leftHeroSection}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGradient}>SAVE</span>
          <span className={styles.heroTitleGradient}>THE</span>
          <span className={styles.heroTitleGradient}>DATES</span>
        </h1>
      </div>
      <div className={styles.rightHeroSection}>
        <div className={styles.rightSectionCard}>
          <div className={styles.cardImgContainer}>
            <Image src="/Images/IMG1.png" fill sizes="100%" alt="image one" />
            <p className={styles.numText}>01.</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.cardTextContainer}>
            <p className={styles.date}>24 JUN 2017</p>
            <p className={styles.dateTitle}>THE DAY WE MET</p>
          </div>
        </div>
        <div className={styles.rightSectionCard}>
          <div className={styles.cardImgContainer}>
            <Image src="/Images/IMG2.png" fill sizes="100%" alt="image two" />
            <p className={styles.numText}>02.</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.cardTextContainer}>
            <p className={styles.date}>24 JUN 2017</p>
            <p className={styles.dateTitle}>STORIES OPENNING</p>
          </div>
        </div>
        <div className={styles.rightSectionCard}>
          <div className={styles.cardImgContainer}>
            <Image src="/Images/IMG3.png" fill sizes="100%" alt="image three" />
            <p className={styles.numText}>03.</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.cardTextContainer}>
            <p className={styles.date}>24 JUN 2017</p>
            <p className={styles.dateTitle}>THE NEXT JOURNEY</p>
          </div>
        </div>
      </div>
    </section>
  );
}
