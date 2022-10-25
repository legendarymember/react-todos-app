import {
  addTodoLoading,
  addTodoSuccess,
  loadTodosLoading,
  loadTodosSuccess
} from '../slices/todoSlice';
import { TODOS } from '../constants/todoMocks';

export const loadTodosAsync = () => async (dispatch) => {
  dispatch(loadTodosLoading());
  await new Promise((resolve) => setTimeout(resolve, 2000));

  dispatch(loadTodosSuccess(TODOS));
};

export const addTodosAsync = (title) => async (dispatch) => {
  dispatch(addTodoLoading());
  await new Promise((resolve) => setTimeout(resolve, 500));

  dispatch(addTodoSuccess(title));
};
