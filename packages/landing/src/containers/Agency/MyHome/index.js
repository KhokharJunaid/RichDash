import Image from "next/image";
import styles from ".//MyHome.module.css";
import HheroImg from "../../../common/assets/image/agency/hero.png";
import NewsletterSection from "containers/Agency/NewsletterSection";

function MyHome() {
  return (
    <div className={styles.main}>
      <div className={styles.colleft}>
        <h1 className={styles.sectionTitle}>
          A Creative way to grow your Exciting Business ideas
        </h1>
        <p>
          Get your blood tests delivered at let home collect sample from the
          victory of the management that supplies best design system guidelines
          ever.
        </p>
        <NewsletterSection />
      </div>
      <div className={styles.image}>
        <Image src={HheroImg} />
      </div>
    </div>
  );
}
export default MyHome;
