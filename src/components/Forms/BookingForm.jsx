import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import icons from '../../icons/icons.svg';
import {
  BookForm,
  BookFormText,
  BookFormTitle,
  CalendarSvg,
  InputField,
  Label,
  TextArea,
} from './BookingForm.styled';
import { Button } from '../../styles/StyledComponents';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isValid, isDirty, dirtyFields, errors },
  } = useForm({
    defaultValues: { name: '', email: '', date: '', comment: '' },
  });

  const onSubmit = data => {
    toast.success(`${data.name}, Your booking has been successfully sent!`);
    reset();
  };

  return (
    <BookForm onSubmit={handleSubmit(onSubmit)}>
      <BookFormTitle>Book your camper van now</BookFormTitle>
      <BookFormText>Stay connected! We are always ready to help you.</BookFormText>

      <Label htmlFor="name">Name</Label>
      <InputField
        type="text"
        id="name"
        placeholder="Name"
        {...register('name', {
          required: 'Name is required',
          pattern: {
            value: /^[A-Za-zА-Яа-я\s]+$/i,
            message: 'Invalid name. Only letters are allowed.',
          },
        })}
        style={{
          border: dirtyFields.name && errors.name ? `2px solid #E44848` : 'none',
        }}
      />

      <Label htmlFor="email">Email</Label>
      <InputField
        type="email"
        id="email"
        placeholder="Email"
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
        })}
        style={{
          border: dirtyFields.email && errors.email ? `2px solid #E44848` : 'none',
        }}
      />

      <Label htmlFor="date">Booking Date</Label>
      <DatePicker
        required
        showIcon
        toggleCalendarOnIconClick
        popperPlacement="top-end"
        id="date"
        selected={watch('date')}
        minDate={new Date()}
        placeholderText="Booking date"
        onChange={date => setValue('date', date)}
        customInput={<InputField />}
        icon={
          <CalendarSvg>
            <use xlinkHref={`${icons}#icon-calendar`} />
          </CalendarSvg>
        }
      />

      <Label htmlFor="comment">Comment</Label>
      <TextArea id="comment" placeholder="Comment" {...register('comment')} />

      <Button type="submit" onSubmit={handleSubmit}>
        Send
      </Button>
    </BookForm>
  );
};

export default BookingForm;
