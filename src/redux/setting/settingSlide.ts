import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SettingState {
  isOpened: boolean;
  isOpeningPageMenu: boolean;
}

export const initialState: SettingState = {
  isOpened: false,
  isOpeningPageMenu: false,
};

export const settingSlide = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    openAndClose: (state) => {
      state.isOpened = !state.isOpened;
    },
    openClosePageMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpeningPageMenu = action.payload;
    },
  },
});

export const { openAndClose, openClosePageMenu } = settingSlide.actions;

export default settingSlide.reducer;
