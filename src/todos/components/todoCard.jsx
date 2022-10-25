import styled from 'styled-components';
import PropTypes from 'prop-types';
import { STATUS } from '../constants/todoMocks';
import { updateTodo } from '../slices/todoSlice';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { colors } from '../../common/constants/styleConstants';

const TodoCardContainer = styled.div`
  background-color: ${colors.celadonBlue};
  border-radius: 10px;
  padding: 15px 20px;
`;

const TextInput = styled.input`
  outline: none;
  font-weight: bold;
  font-size: 24px;
  background-color: transparent;
  border: none;
  display: inline;
  padding: none;
  width: auto;
  color: ${colors.gainsboro};
  margin-bottom: 10px;
`;

const DateText = styled.div`
  font-size: 16px;
  color: ${colors.powderBlue};
`;

function TodoCard({ todo, updateTodo }) {
  return (
    <TodoCardContainer>
      <TextInput
        type="text"
        value={todo.title}
        onChange={(event) => updateTodo({ ...todo, title: event.target.value })}
      ></TextInput>
      <DateText>{dayjs(todo.createdDate).format('MMM D, YYYY')}</DateText>
    </TodoCardContainer>
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
