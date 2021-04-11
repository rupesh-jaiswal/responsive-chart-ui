import Container from '@material-ui/core/Container';
import { AppHeader, BookSpot, Schedule } from './components';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Container>

        <AppHeader className="app__header">
          Dashboard
        </AppHeader>
        <Schedule />
        <BookSpot />
      </Container>
    </div>
  );
}

export default App;
