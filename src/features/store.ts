import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reactotron from 'reactotronConfig';

import authReducer from './auth/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [reactotron.createEnhancer!()],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
