import { createSlice } from "@reduxjs/toolkit";

type GeoProps = {
  locations: any;
};

const initialState: GeoProps = {
  locations: [],
};

export const geoLocation = createSlice({
  name: "location",
  initialState,
  reducers: {
    locationForSubmit(state, action) {
      const data = action.payload.data;

      if (state.locations.length === 3) {
        state.locations.shift();
      }
      state.locations.push(data);
    },
  },
});

export const geoActions = geoLocation.actions;
