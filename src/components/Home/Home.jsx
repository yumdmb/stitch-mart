import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import HomeContent from "../HomeContent/HomeContent";
import Footer from '../Footer/Footer';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import SaleItem from '../SaleItem/SaleItem';
import Login from '../Login/Login';

function Home() {
  return (
    <div>
      <Header />
      <HomeContent />
      <FeaturesCard />
      <SaleItem />
      <Footer />
      <Login />
    </div>
  );
}

export default Home;
