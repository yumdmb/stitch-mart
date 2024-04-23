import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeContent from './components/HomeContent/HomeContent';
import Footer from './components/Footer/Footer';
import FeaturesCard from './components/FeaturesCard/FeaturesCard';
import SaleItem from './components/SaleItem/SaleItem';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ContactUsApp from './components/ContactUs/ContactUsApp';
import Profile from './components/Profile/Profile';
import HomeAfterLogin from './components/HomeAfterLogin/HomeAfterLogin';
import FinancialApp from './components/Financial/FinancialApp';
import ProductsDisplay from './components/CardItems/ProductsDisplay';
import EmbroideryServiceBooking from './components/Booking/Booking';
import BookingApp from './components/Booking/BookingApp';
import TutorialApp from './components/Tutorial/TutorialApp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/header" element={<Header />} /> 
      <Route path="/homeContent" element={<HomeContent />} />
      <Route path="/featuresCard" element={<FeaturesCard />} />
      <Route path="/saleItem" element={<SaleItem />} />
      <Route path="/footer" element={<Footer />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/contact" element={<ContactUsApp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/homeAfterLogin' element={<HomeAfterLogin />} />
      <Route path="/financialApp" element={<FinancialApp/>} />
      <Route path="/products" element={<ProductsDisplay/>} />
      <Route path="/bookingApp" element={<BookingApp />} />
      <Route path="/tutorial" element={<TutorialApp />} />

    </Routes>
  );
}

export default App;
