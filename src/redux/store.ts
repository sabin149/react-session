import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'redux/slice/userSlice';
import nameReducer from 'redux/slice/nameSlice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  devTools: { name: 'ReduxUserStore' },
  reducer: {
    user: userReducer,
    name: nameReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
