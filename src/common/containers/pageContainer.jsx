import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../components/header';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledContent = styled.div`
  flex: 1 0 auto;
`;

export default function PageContainer({ children }) {
  return (
    <StyledPage>
      <Header />
      <StyledContent>{children}</StyledContent>
    </StyledPage>
  );
}

PageContainer.propTypes = {
  children: PropTypes.element.isRequired
};
