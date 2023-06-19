import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import reactotron from 'reactotronConfig';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [reactotron.createEnhancer!()],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
