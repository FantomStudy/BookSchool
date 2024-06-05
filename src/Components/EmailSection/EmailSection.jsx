import styles from "./EmailSection.module.css";
import Button from "../Buttons/Button";

export default function EmailSection() {
  return (
    <>
      <section className={styles.emailSection}>
        <div className={styles.textBlock}>
          <p className={styles.greenText}>Newsletter</p>
          <h1 className={styles.head}>Our Experts Teacher</h1>
          <p className={styles.description}>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className={styles.inputBlock}>
          <input className={styles.inputEmail} type="text" placeholder="Your email" />
          <Button type='fill'>Subscribe</Button>
        </div>
      </section>
    </>
  );
}
