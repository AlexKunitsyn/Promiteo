import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import { createWrapper } from 'next-redux-wrapper';
import {setupListeners} from "@reduxjs/toolkit/query";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


export const setupStore = () => {
  const store = configureStore({
    reducer: {
      example: exampleReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          // serializableCheck: false,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = setupStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof setupStore>;

export const wrapper = createWrapper<AppStore>(setupStore, {
    debug: false,
    serializeState: (state) => JSON.stringify(state),
    deserializeState: (state) => JSON.parse(state),
});

export default store;