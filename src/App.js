import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeContent from './components/HomeContent/HomeContent';
import Footer from './components/Footer/Footer';
import FeaturesCard from './components/FeaturesCard/FeaturesCard';
import SaleItem from './components/SaleItem/SaleItem';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/header" element={<Header />} /> 
      <Route path="/homeContent" element={<HomeContent />} />
      <Route path="/featuresCard" element={<FeaturesCard />} />
      <Route path="/saleItem" element={<SaleItem />} />
      <Route path="/footer" element={<Footer />}/>
    </Routes>
  );
}

export default App;
