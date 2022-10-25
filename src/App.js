import './App.css';
import PageContainer from './common/containers/pageContainer';
import { TodosPage } from './todos/containers/todosContainer';

function App() {
  return (
    <PageContainer>
      <TodosPage></TodosPage>
    </PageContainer>
  );
}

export default App;
