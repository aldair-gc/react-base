import { BrowserRouter } from 'react-router-dom';

// import history from './services/history';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
