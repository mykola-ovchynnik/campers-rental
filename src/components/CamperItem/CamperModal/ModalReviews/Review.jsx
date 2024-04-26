import {
  NameRatingWrapper,
  ReviewItem,
  ReviewerComment,
  ReviewerImage,
  ReviewerName,
  StarSvg,
  Stars,
} from './ModalReviews.styled';
import icons from '../../../../icons/icons.svg';

export const Review = ({ review }) => {
  return (
    <ReviewItem>
      <ReviewerImage>{review.reviewer_name[0]}</ReviewerImage>

      <NameRatingWrapper>
        <ReviewerName>{review.reviewer_name}</ReviewerName>
        <Stars>
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;

            return (
              <li key={index}>
                <StarSvg fill={ratingValue <= review.reviewer_rating ? '#ffc531' : '#F2F4F7'}>
                  <use xlinkHref={`${icons}#icon-star`} />
                </StarSvg>{' '}
              </li>
            );
          })}
        </Stars>
      </NameRatingWrapper>

      <ReviewerComment>{review.comment}</ReviewerComment>
    </ReviewItem>
  );
};
