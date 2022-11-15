import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StyledListTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.primaryBackgroundColor};
`;

export function ListContainer({ title, children }) {
  return (
    <StyledContainer>
      <StyledListTitle>{title}</StyledListTitle>
      {children}
    </StyledContainer>
  );
}

ListContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
};
