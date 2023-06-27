import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    username: '',
    id: null,
    hasInitialDataFetched: true,
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

    setHasInitialDataFetched: (state) => {
      state.hasInitialDataFetched = !state.hasInitialDataFetched;
    },

  },
});

export const { setAuthInfo, clearAuthInfo, setHasInitialDataFetched } = authSlice.actions;

export default authSlice.reducer;
