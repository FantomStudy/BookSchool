import Button from "../Buttons/Button";
import styles from "./IntroSection.module.css";

const AboutBlock = [
  {
    image: "public/block1.svg",
    head: "Certified Teacher",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
  {
    image: "public/block2.svg",
    head: "2,769 online courses	",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
  {
    image: "public/block3.svg",
    head: "2,438 ofline courses	",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
  },
];

export default function IntroSection() {
  return (
    <>
      <section className={styles.introSection}>
        <div className = {styles.textBlock}>
          <p className={styles.greenText}>Online training</p>
          <h1 className={styles.head}>
            25K+ STUDENTS <br /> TRUST US
          </h1>
          <p className={styles.description}>
            Our goal is to make online education work for everyone
          </p>
          <div className={styles.buttons}>
            <Button type='fill'>Get Quote Now</Button>
            <Button type='inline'>Learn More</Button>
          </div>
        </div>
        <img className={styles.introImg} src="/public/Intro.svg" alt="" />
      </section>
      <div className={styles.row}>
        {AboutBlock.map((block) => (
          <div className={styles.aboutBlock}>
            <img className={styles.aboutImg} src={block.image} alt="" />
            <h2 className={styles.aboutHead}>{block.head}</h2>
            <p className={styles.aboutDescription}>{block.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
