import { createSlice } from '@reduxjs/toolkit';
import { addTodoAsync, loadTodosAsync } from '../apiActions/todosApiActions';
import { STATUS } from '../constants/todoMocks';

const DEFAULT_ERROR_MESSAGE = 'Error occured. Try again later.';
const initialState = { isLoading: false, errorMessage: '', todos: [] };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateTodo(state, action) {
      const index = state.todos.findIndex((el) => el.id === action.payload.id);
      state.todos.splice(index, 1, action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodosAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadTodosAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload || DEFAULT_ERROR_MESSAGE;
    });

    builder.addCase(loadTodosAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });

    builder.addCase(addTodoAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos.push({
        id:
          state.todos && state.todos.length
            ? Math.max.apply(
                null,
                state.todos.map((t) => t.id)
              ) + 1
            : 0,
        createdDate: new Date(),
        status: STATUS.Pending,
        title: action.payload
      });
    });

    builder.addCase(addTodoAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload || DEFAULT_ERROR_MESSAGE;
    });
  }
});

export const selectTodosByStatus = (state, status) =>
  filterAndSortByStatus(state.todo.todos, status);

export const filterAndSortByStatus = (todos, status) =>
  todos
    .filter((t) => t.status === status)
    .sort((a, b) => a.createdDate - b.createdDate);

export const { selectTodos, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
