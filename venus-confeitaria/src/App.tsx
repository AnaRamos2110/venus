import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Fidelivenus from './pages/Fidelivenus';
import MinhaConta from './pages/MinhaConta';
import FavoritesPage from './pages/Favorites';
import Suporte from './pages/Suporte';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF0FA] flex flex-col">
        <Header />
        <div className="flex-1 grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="/Fidelivenus" element={<Fidelivenus />} />
            <Route path="/MinhaConta" element={<MinhaConta />} />
            <Route path="/Favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>

        <Suporte />
    </Router>
  );
}