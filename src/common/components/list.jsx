import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledListTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.primaryBackgroundColor};
`;

export function List({ items, title, children }) {
  return (
    <StyledContainer>
      <StyledListTitle>{title}</StyledListTitle>
      <StyledListContainer>
        {items.length > 0 && items.map((el, index) => children(el, index))}
      </StyledListContainer>
    </StyledContainer>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired
};
