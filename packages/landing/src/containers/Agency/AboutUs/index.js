import Image from "next/image";
import styles from ".//AAbout.module.css";
import AAboutImg from "../../../common/assets/image/agency/aabout.png";
function AAboutUs() {
  return (
    <div className={styles.main}>
      <div className={styles.colleft}>
        <h1 className={styles.sectionTitle}>About Us</h1>
        <p>
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
        </p>
      </div>
      <div className={styles.image}>
        <Image src={AAboutImg} />
      </div>
    </div>
  );
}
export default AAboutUs;
