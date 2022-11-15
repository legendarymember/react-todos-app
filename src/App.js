import { ThemeProvider } from 'styled-components';
import './App.css';
import PageContainer from './common/containers/pageContainer';
import { TodosPage } from './todos/containers/todosContainer';
import { mainTheme } from './common/themes/mainTheme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <PageContainer>
        <TodosPage></TodosPage>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
