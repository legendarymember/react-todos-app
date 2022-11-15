import styled from 'styled-components';
import { keyframes } from 'styled-components';
import loader from '../../assests/loader.jpeg';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledLoader = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${loader});
  background-size: cover;
  animation: ${spin} 2s linear infinite;
  margin: 0;
`;

const StyledLoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Loader() {
  return (
    <StyledLoaderContainer>
      <StyledLoader />
    </StyledLoaderContainer>
  );
}
