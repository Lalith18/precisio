import './App.css';
import { Route, Redirect  } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar.component';
import Homepage from './pages/HomePage/Homepage';
import CompetitionsPage from './pages/CompetitionsPage';
import CompetitionOverview from './components/competitions-overview/competions-overview.component';
import GalleryPage from './pages/GalleryPage';
import GalleryOverviewPage from './pages/GalleryOverviewPage';
import SponsorsPage from './pages/SponsorsPage';
import TeamsPage from './pages/TeamPage/TeamsPage';
import PrevTeamsPage from './pages/PrevTeamsPage';
import PrevTeamOverviewPage from './pages/PrevTeamOverviewPage';
import Footer from './components/Footer/Footer.components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Route exact path='/'>
        <Redirect  to='/home' />
      </Route>
      <Route exact path='/home' component={Homepage} />
      <Route exact path='/competitions' component={CompetitionsPage} />
      <Route path='/competitions/:id' component={CompetitionOverview} />
      <Route exact path='/teams' component={TeamsPage} />
      <Route exact path='/teams/prevteams' component={PrevTeamsPage} />
      <Route path='/teams/prevteams/:teamname' component={PrevTeamOverviewPage} />
      <Route exact path='/gallery' component={GalleryPage} />
      <Route path='/gallery/:galleryid' component={GalleryOverviewPage} />
      <Route path='/sponsors' component={SponsorsPage} />
      <Footer />
    </div>
  );
}

export default App;
