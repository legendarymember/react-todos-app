import { TODOS } from '../constants/todoMocks';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadTodosAsync = createAsyncThunk('loadTodos', async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return TODOS;
});

export const addTodoAsync = createAsyncThunk('addTodo', async (title) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return title;
});
