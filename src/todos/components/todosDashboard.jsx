import styled from 'styled-components';
import { STATUS } from '../constants/todoMocks';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodosAsync } from '../apiActions/todosApiActions';
import { buttonStyle } from '../../common/constants/styleConstants';
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

const TodoListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export function TodosDashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addTodo = (title) => {
    dispatch(addTodosAsync(title));
  };

  const todos = useSelector((state) => state.todo.todos);

  const onDragEnd = (sourceStatus, index, destinationStatus) => {
    const movedElement = filterAndSortByStatus(todos, sourceStatus)[index];

    dispatch(updateTodo({ ...movedElement, status: destinationStatus }));
  };

  return (
    <>
      <ButtonContainer>
        <Button
          variant="primary"
          size="lg"
          style={buttonStyle}
          onClick={openModal}
        >
          Add todo
        </Button>
      </ButtonContainer>
      <TodoListsContainer>
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
      </TodoListsContainer>
      <AddTodoModal
        show={modalOpen}
        onHide={closeModal}
        onAddTodo={addTodo}
      ></AddTodoModal>
    </>
  );
}
