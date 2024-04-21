import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import HomeContent from "../HomeContent/HomeContent";
import Footer from '../Footer/Footer';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import SaleItem from '../SaleItem/SaleItem';

function Home() {
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

export default Home;
