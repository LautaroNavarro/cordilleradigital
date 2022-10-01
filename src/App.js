import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './styles';
import Home from './screens/Home/Home';
import GymTrackerHome from './screens/GymTracker/Home';
import VoleyHome from './screens/Voley/Home';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import WidthContainer from './components/WidthContainer/WidthContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <NavBar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/voley" element={<VoleyHome />} />
              <Route path="/gym-tracker" element={<GymTrackerHome />} />
            </Routes>
          </Router>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
