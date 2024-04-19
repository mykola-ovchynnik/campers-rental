export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false,
  }).format(value);
}

export const ratingCalculator = reviews => {
  const totalRating = reviews.reduce(
    (acc, review) => acc + review.reviewer_rating,
    0
  );
  return (totalRating / reviews.length).toFixed(1);
};

export const validateInput = (e, setValue, setIsValid) => {
  const isValid = /^[A-Za-z,\s]*$/.test(e.target.value);
  setValue('location', e.target.value);
  setIsValid(isValid);
  return isValid;
};
