import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { openAndClose, openClosePageMenu } from './setting/settingSlide';
import { RootState } from './store';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(openAndClose, openClosePageMenu),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      'setting',
      JSON.stringify((listenerApi.getState() as RootState).setting)
    ),
});
