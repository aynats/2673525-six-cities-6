import Review from './review';
import { type ReviewType } from '../types/review';

type ReviewsListProps = {
  reviews: ReviewType[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const reviewsAmount = reviews.length;
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review
            key={review.id}
            id={review.id}
            user={review.user}
            rating={review.rating}
            date={review.date}
            comment={review.comment}
          />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
