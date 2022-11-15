import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import todoReducer from '../todos/slices/todoSlice';

export const initialState = {
  todos: [],
  loading: false,
  error: ''
};

const reducer = combineReducers({
  todo: todoReducer
});

export default configureStore({
  reducer: reducer,
  initialState: initialState,
  middleware: [thunk]
});
