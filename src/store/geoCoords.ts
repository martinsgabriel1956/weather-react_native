import { createSlice } from "@reduxjs/toolkit";

type GeoProps = {
  data: any;
}

const initialState: GeoProps = {
  data: {}
}

export const geoLocation = createSlice({
  name: "geoLocation",
  initialState,
  reducers: {
    locationForSubmit(state, action) {
      const data = action.payload.data;

      return data;
    },
    locationForCoords(state, action) {
      const data = action.payload.data;

      return data;
    }
  }
})

export const geoActions = geoLocation.actions;