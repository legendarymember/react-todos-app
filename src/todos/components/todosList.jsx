import styled from 'styled-components';
import TodoCard from './todoCard';
import { DraggableList } from '../../common/components/draggableList';
import { ListContainer } from '../../common/components/listContainer';
import { selectTodosByStatus } from '../slices/todoSlice';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const StyledListItemContainer = styled.div`
  margin-bottom: 20px;
`;

export function TodosList({ status }) {
  const todos = useSelector((state) => selectTodosByStatus(state, status));

  return (
    <ListContainer title={status}>
      <DraggableList
        listKey={status}
        items={todos}
        renderItem={(todo) => (
          <StyledListItemContainer>
            <TodoCard key={todo.id} todo={todo}></TodoCard>
          </StyledListItemContainer>
        )}
      ></DraggableList>
    </ListContainer>
  );
}

TodosList.propTypes = {
  status: PropTypes.string.isRequired
};
