export const handleFulfilledCampers = (state, { payload }) => {
  state.campers.push(...payload.campers);
  state.hasMore = payload.hasMore;
};

export const handleFulfilledSingleCamper = (state, { payload }) => {
  state.singleCamper = payload;
};

export const handleFulfilledFilteredCampers = (state, { payload }) => {
  state.campers = payload.campers;
  state.hasMore = payload.hasMore;
};
