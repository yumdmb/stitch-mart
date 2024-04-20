import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import HomeContent from "./components/HomeContent/HomeContent";
import Footer from './components/Footer/Footer';
import FeaturesCard from './components/FeaturesCard/FeaturesCard';
import SaleItem from './components/SaleItem/SaleItem';

function App() {
  return (
    <div>
      <Header />
      <HomeContent />
      <FeaturesCard />
      <SaleItem />
      <Footer />
    </div>
  );
}

export default App;
