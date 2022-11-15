import styled, { useTheme } from 'styled-components';
import { STATUS } from '../constants/todoMocks';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../apiActions/todosApiActions';
import { AddTodoModal } from './addTodoModal';
import { useSelector } from 'react-redux';
import {
  filterAndSortByStatus,
  selectTodosByStatus,
  updateTodo
} from '../slices/todoSlice';
import { DraggableLists } from '../../common/components/draggableLists';
import { List } from '../../common/components/list';
import TodoCard from './todoCard';

const StyledTodoListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export function TodosDashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addTodo = (title) => {
    dispatch(addTodoAsync(title));
  };

  const todos = useSelector((state) => state.todo.todos);

  const onDragEnd = (sourceStatus, index, destinationStatus) => {
    const movedElement = filterAndSortByStatus(todos, sourceStatus)[index];

    dispatch(updateTodo({ ...movedElement, status: destinationStatus }));
  };

  return (
    <>
      <StyledButtonContainer>
        <Button
          variant="primary"
          size="lg"
          style={theme.buttonStyle}
          onClick={openModal}
        >
          Add todo
        </Button>
      </StyledButtonContainer>
      <StyledTodoListsContainer>
        <DraggableLists
          getListKeys={() => Object.keys(STATUS).map((s) => STATUS[s])}
          getListItems={(status) =>
            useSelector((state) => selectTodosByStatus(state, status))
          }
          renderList={(status, todos, renderItem) => (
            <List items={todos} title={status}>
              {(todo, index) => renderItem(todo, todo.id, index)}
            </List>
          )}
          renderItem={(todo) => <TodoCard key={todo.id} todo={todo}></TodoCard>}
          onDrag={onDragEnd}
        ></DraggableLists>
      </StyledTodoListsContainer>
      <AddTodoModal
        show={modalOpen}
        onHide={closeModal}
        onAddTodo={addTodo}
      ></AddTodoModal>
    </>
  );
}
