import { configureStore } from '@reduxjs/toolkit';
import ageReducer from './slices/ageSlice';
import languageReducer from './slices/languageSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
    reducer: {
        age: ageReducer,
        language: languageReducer,
        contact: contactReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;