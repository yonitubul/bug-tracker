import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import bugReducer from './bugSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bugs: bugReducer,
    user: userReducer
  },
});
