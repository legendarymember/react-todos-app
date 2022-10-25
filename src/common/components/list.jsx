import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../common/constants/styleConstants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LitTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.celadonBlue};
`;

export function List({ items, title, children }) {
  return (
    <Container>
      <LitTitle>{title}</LitTitle>
      <ListContainer>
        {items.length > 0 && items.map((el, index) => children(el, index))}
      </ListContainer>
    </Container>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  children: PropTypes.func.isRequired
};
