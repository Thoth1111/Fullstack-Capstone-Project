import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    username: '',
    id: null,
  },
  reducers: {
    setAuthInfo: (state, action) => {
      const { username, id, token } = action.payload;
      state.username = username;
      state.id = id;
      state.token = token;
    },
    clearAuthInfo: (state) => {
      state.token = null;
      state.username = '';
      state.id = null;
    },
  },
});




export const { setAuthInfo, clearAuthInfo } = authSlice.actions;

export default authSlice.reducer;
