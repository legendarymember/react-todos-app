import styled, { useTheme } from 'styled-components';
import { STATUS } from '../constants/todoMocks';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../apiActions/todosApiActions';
import { AddTodoModal } from './addTodoModal';
import { useSelector } from 'react-redux';
import { filterAndSortByStatus, updateTodo } from '../slices/todoSlice';
import { DraggableList } from '../../common/components/draggableList';
import { TodosList } from '../components/todosList';

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
        <DraggableList.Context onDrag={onDragEnd}>
          {Object.keys(STATUS).map((s) => (
            <TodosList key={s} status={STATUS[s]}></TodosList>
          ))}
        </DraggableList.Context>
      </StyledTodoListsContainer>
      <AddTodoModal
        show={modalOpen}
        onHide={closeModal}
        onAddTodo={addTodo}
      ></AddTodoModal>
    </>
  );
}
