import styled from 'styled-components';
import PropTypes from 'prop-types';
import { STATUS } from '../constants/todoMocks';
import { updateTodo } from '../slices/todoSlice';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

const StyledTodoCardContainer = styled.div`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  border-radius: 10px;
  padding: 15px 20px;
`;

const StyledTextInput = styled.input`
  outline: none;
  font-weight: bold;
  font-size: 24px;
  background-color: transparent;
  border: none;
  display: inline;
  padding: none;
  width: auto;
  color: ${(props) => props.theme.secondaryColor};
  margin-bottom: 10px;
`;

const StyledDateText = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.primaryColor};
`;

function TodoCard({ todo, updateTodo }) {
  return (
    <StyledTodoCardContainer>
      <StyledTextInput
        type="text"
        value={todo.title}
        onChange={(event) => updateTodo({ ...todo, title: event.target.value })}
      ></StyledTextInput>
      <StyledDateText>
        {dayjs(todo.createdDate).format('MMM D, YYYY')}
      </StyledDateText>
    </StyledTodoCardContainer>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdDate: PropTypes.instanceOf(Date),
    status: PropTypes.oneOf(Object.keys(STATUS).map((s) => STATUS[s])),
    title: PropTypes.string.isRequired
  }),
  updateTodo: PropTypes.func
};

const mapDispatchToProps = {
  updateTodo: updateTodo
};

export default connect(null, mapDispatchToProps)(TodoCard);
