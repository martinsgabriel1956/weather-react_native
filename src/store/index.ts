import { configureStore } from '@reduxjs/toolkit';

import { geoLocation } from './geoCoords';

export const store = configureStore({
  reducer: {
    location: geoLocation.reducer,
  }
})