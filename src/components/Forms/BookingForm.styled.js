import styled from 'styled-components';

export const BookForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 448px;
  height: 532px;
  padding: 24px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
`;

export const BookFormTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const BookFormText = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: none;
`;

export const InputField = styled.input`
  width: 400px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background: var(--Inputs, #f7f7f7);
  margin-bottom: 14px;
  padding: 18px;

  &:focus {
    outline: none;
  }

  &.react-datepicker__input-container {
    padding: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 400px;
  height: 111px;
  border-radius: 10px;
  border: none;
  background: var(--Inputs, #f7f7f7);
  margin-bottom: 24px;
  padding: 18px;

  &:focus {
    outline: none;
  }
`;

export const CalendarSvg = styled.svg`
  &.react-datepicker__calendar-icon {
    padding: 0 !important;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 18px;
    top: 18px;
  }

  &:hover {
    cursor: pointer;
  }
`;
