import styles from "./ReviewCard.module.css";

export default function ReviewCard({ avatar, description, name, post }) {
  return (
    <>
      <div className={styles.reviewCard}>
        <img className={styles.avatar} src={avatar} alt="" />
        <p className={styles.description}>{description}</p>
        <img className={styles.rating} src="timeRate.svg" alt="" />
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.post}>{post}</p>
      </div>
    </>
  );
}
