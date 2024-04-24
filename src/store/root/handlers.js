export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
export const handleFulfilled = state => {
  state.isLoading = false;
};
