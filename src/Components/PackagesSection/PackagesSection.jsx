import styles from"./PackagesSection.module.css";

export default function PackagesSection() {
  return (
    <>
      <section className={styles.packagesSection} id="product">
        <img className={styles.packageImg} src="public/Packages.svg" alt="" />
        <div className={styles.textBlock}>
          <h1 className={styles.head}>Approdable Packages</h1>
          <p className={styles.description}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <a href="#" className={styles.greenText}>
            Learn More <img src="/public/arrowInfo.svg" alt="" />
          </a>
        </div>
      </section>
      
      <section className={styles.packagesSection}>
        <div className={styles.textBlock}>
          <h1 className={styles.head}>Approdable Packages</h1>
          <p className={styles.description}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <a href="#" className={styles.greenText}>
            Learn More
            <img src="/public/arrowInfo.svg" alt="" />
          </a>
        </div>
        <img className={styles.packageImg} src="public/videoPack.svg" alt="" />
      </section>
    </>
  );
}
