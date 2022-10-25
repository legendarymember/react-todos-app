import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../components/header';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  flex: 1 0 auto;
`;

export default function PageContainer({ children }) {
  return (
    <Page>
      <Header></Header>
      <Content>{children}</Content>
    </Page>
  );
}

PageContainer.propTypes = {
  children: PropTypes.element.isRequired
};
