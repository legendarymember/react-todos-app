import styled from 'styled-components';
import { colors } from '../constants/styleConstants';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  background-color: ${colors.prussianBlue};
`;

const Title = styled.div`
  font-size: 40px;
  color: ${colors.powderBlue};
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Title>Nodi todody tracker</Title>
    </HeaderWrapper>
  );
}
