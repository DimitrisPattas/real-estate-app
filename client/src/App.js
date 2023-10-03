import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AdsPage from './pages/AdsPage';
import NewAdPage from './pages/NewAdPage';
import AdInfoPage from './pages/AdInfoPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="md:px-36">
      <NavBar />
      <Routes>
        <Route path="/" element={<AdsPage />} />
        <Route path="/new" element={<NewAdPage />} />
        <Route path="/ad/:id" element={<AdInfoPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
