import styles from "../Components/LandingPage/LandingPage.module.css";
import Hero from "@/Components/LandingPage/Hero";
export default function Home() {
  return (
    <main className={styles.landingWrapper}>
      <Hero styles={styles} />
    </main>
  );
}
