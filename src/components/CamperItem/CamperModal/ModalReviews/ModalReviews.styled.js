import styled from 'styled-components';

export const ReviewsList = styled.ul`
  width: 430px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewItem = styled.li`
  position: relative;
`;

export const ReviewerName = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const NameRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 24px;
  margin-left: 76px;
`;

export const ReviewerComment = styled.p`
  color: #475467;
`;

export const Stars = styled.ul`
  display: flex;
  gap: 4px;
`;

export const StarSvg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const ReviewerImage = styled.div`
  overflow: hidden;
  position: absolute;

  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: #f2f4f7;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #e44848;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;
