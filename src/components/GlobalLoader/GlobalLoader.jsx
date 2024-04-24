import { useSelector } from 'react-redux';
import Loader from './Globalloader.styled';
import {
  GlobalErrorSelector,
  GlobalLoadingSelector,
} from '../../store/root/rootSlice';
import toast, { Toaster } from 'react-hot-toast';

import { useEffect } from 'react';

export const GlobalLoader = () => {
  const isLoading = useSelector(GlobalLoadingSelector);
  const error = useSelector(GlobalErrorSelector);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <Toaster />
      {isLoading ? <Loader /> : null}
    </>
  );
};
