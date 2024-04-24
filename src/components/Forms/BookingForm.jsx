import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import icons from '../../icons/icons.svg';
import {
  BookForm,
  BookFormText,
  BookFormTitle,
  InputField,
  Label,
  TextArea,
} from './BookingForm.styled';
import { Button } from '../../styles/StyledComponents';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <BookForm onSubmit={handleSubmit}>
      <BookFormTitle>Book your campervan now</BookFormTitle>
      <BookFormText>Stay connected! We are always ready to help you.</BookFormText>

      <Label htmlFor="name">Name</Label>
      <InputField type="text" name="name" value={name} onChange={e => setName(e.target.value)} />

      <Label htmlFor="email">Email</Label>
      <InputField
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Label htmlFor="date">Booking Date</Label>
      <DatePicker
        showIcon
        name="date"
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<InputField />}
        icon={
          <svg>
            <use xlinkHref={`${icons}#icon-calendar`} />
          </svg>
        }
      />
      <Label htmlFor="comment">Comment</Label>
      <TextArea name="comment" value={comment} onChange={e => setComment(e.target.value)} />
      <Button type="submit" onSubmit={handleSubmit}>
        Send
      </Button>
    </BookForm>
  );
};

export default BookingForm;
