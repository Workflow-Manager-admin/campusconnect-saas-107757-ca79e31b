import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import jobsReducer from './slices/jobsSlice';
import placementsReducer from './slices/placementsSlice';
import notificationsReducer from './slices/notificationsSlice';

// PUBLIC_INTERFACE
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    jobs: jobsReducer,
    placements: placementsReducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;
