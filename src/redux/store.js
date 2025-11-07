import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import {persistStore} from "redux-persist";
import { createWrapper } from 'next-redux-wrapper';

// const store = configureStore({
//   reducer: {
//     example: exampleReducer,
//   },
// });

export const setUpStore = () => {
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
        }).concat([baseApi.middleware, rtkQueryErrorLogger]),
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = setUpStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof setUpStore>;

export const wrapper = createWrapper<AppStore>(setUpStore, {
    debug: false,
    serializeState: (state) => JSON.stringify(state),
    deserializeState: (state) => JSON.parse(state),
});

export default store;