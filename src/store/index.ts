import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice untuk mengelola currentPath
const pathSlice = createSlice({
  name: 'path',
  initialState: {
    currentPath: '/', // State default
  },
  reducers: {
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload; // Perbarui currentPath
    },
  },
});

export const { setCurrentPath } = pathSlice.actions;

export const createStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      path: pathSlice.reducer,
    },
    preloadedState, // State awal
  });

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
