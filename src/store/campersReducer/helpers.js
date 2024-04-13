export const handleFulfilledCampers = (state, { payload }) => {
  // state.campers = [...state.campers, ...payload];
  state.campers.push(...payload);
};
