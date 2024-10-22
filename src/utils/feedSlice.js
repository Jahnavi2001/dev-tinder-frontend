/* eslint-disable no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: 'feed',
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: (state, action) => {
      const newState = state.filter(user => user._id !== action.payload._id)
      return newState
    }
  }
})

export const { addFeed, removeFeed } = feedSlice.actions

export default feedSlice.reducer