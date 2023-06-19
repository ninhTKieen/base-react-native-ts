import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
