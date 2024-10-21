import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: 'Connections',
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload
    }
  }
})

export const { addConnections } = connectionsSlice.actions

export default connectionsSlice.reducer