import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Loader } from '../../common/components/loader';
import { loadTodosAsync } from '../apiActions/todosApiActions';
import { TodosDashboard } from '../components/todosDashboard';

const StyledTodosPageContainer = styled.div`
  padding: 30px 70px;
  height: 100%;
`;

export function TodosPage() {
  const isLoading = useSelector((state) => state.todo.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosAsync());
  }, []);

  return (
    <StyledTodosPageContainer>
      {isLoading ? <Loader></Loader> : <TodosDashboard></TodosDashboard>}
    </StyledTodosPageContainer>
  );
}
