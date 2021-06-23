import './App.css';
import { Route  } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import Homepage from './pages/Homepage';
import CompetitionsPage from './pages/CompetitionsPage'
import Footer from './components/Footer/Footer.components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Homepage} />
      <Route path='/competitions' component={CompetitionsPage} />
      <Footer />
    </div>
  );
}

export default App;
