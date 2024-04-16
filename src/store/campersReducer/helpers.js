export const handleFulfilledCampers = (state, { payload }) => {
  state.campers.push(...payload.campers);
  state.hasMore = payload.hasMore;
};
