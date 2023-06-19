import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '@src/features/store';
import {AuthState} from './auth.model';

const initialState: AuthState = {
  currentUser: undefined,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    logout(state) {
      state.currentUser = undefined;
      state.isLoggedIn = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export const authActions = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
