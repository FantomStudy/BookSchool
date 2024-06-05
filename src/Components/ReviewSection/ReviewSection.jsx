import styles from "./ReviewSection.module.css";
import { reviews } from "./ReviewCard/reviewList";
import ReviewCard from "./ReviewCard/ReviewCard";

export default function ReviewSection() {
  return (
    <>
      <section className={styles.reviewSection} id="review">
        <div className={styles.textBlock}>
          <p className={styles.greenText}>Testimonials</p>
          <h1 className={styles.head}>Our Popular Courses</h1>
          <p className={styles.description}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className={styles.tape}>
          {reviews.map((review) => (
            <ReviewCard
              avatar={review.avatar}
              description={review.description}
              name={review.name}
              post={review.post}
            ></ReviewCard>
          ))}
        </div>
      </section>
    </>
  );
}
