import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: ''
};

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    changeName: (state, { payload }) => {
      state.name = payload;
    }
  }
});

export default nameSlice.reducer;
export const { changeName } = nameSlice.actions;
