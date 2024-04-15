export const handleFulfilledCampers = (state, { payload }) => {
  state.campers.push(...payload);
};
