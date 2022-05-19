import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext'
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
