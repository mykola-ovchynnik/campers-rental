import { useSelector } from 'react-redux';
import BookingForm from '../../../Forms/BookingForm';
import { AdditionalInfoWrapper } from '../CamperModal.styled';
import { singleCamperSelector } from '../../../../store/campersReducer/campersSlice';
import { ReviewsList } from './ModalReviews.styled';
import { Review } from './Review';

export const ModalReviews = () => {
  const camper = useSelector(singleCamperSelector);

  return (
    <AdditionalInfoWrapper>
      <ReviewsList>
        {camper.reviews &&
          camper.reviews.map((review, index) => {
            return <Review key={index} review={review} />;
          })}
      </ReviewsList>
      <BookingForm />
    </AdditionalInfoWrapper>
  );
};
