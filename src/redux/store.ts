import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counter/counterSlide';
import settingReducer from './setting/settingSlide';
import { listenerMiddleware } from './middleware';

const isOpenPageMenuState = JSON.parse(
  localStorage.getItem('setting') || 'null'
);

export const store = configureStore({
  preloadedState: {
    setting:
      isOpenPageMenuState === null
        ? { isOpened: false, isOpeningPageMenu: false }
        : isOpenPageMenuState,
  },
  reducer: {
    counter: counterReducer,
    setting: settingReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware,
  ],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
