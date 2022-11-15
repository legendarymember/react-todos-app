import styled from 'styled-components';
import TodoCard from './todoCard';
import { DraggableList } from '../../common/components/draggableList';
import { ListContainer } from '../../common/components/listContainer';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { filterAndSortByStatus } from '../utils/todosUtils';

const StyledListItemContainer = styled.div`
  margin-bottom: 20px;
`;

export function TodosList({ status }) {
  const todos = useSelector((state) =>
    filterAndSortByStatus(state.todo.todos, status)
  );

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
