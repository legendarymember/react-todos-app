import styled from 'styled-components';

const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

const StyledTitle = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.primaryColor};
`;

export function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledTitle>Nodi todody tracker</StyledTitle>
    </StyledHeaderWrapper>
  );
}
