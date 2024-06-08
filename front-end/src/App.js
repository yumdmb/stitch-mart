import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import BookingApp from './components/Booking/BookingApp';
import TimeAvailable from './components/Booking/TimeAvailable';
import Booking from './components/Booking/Booking';
import ReceiveBooking from './components/Booking/ReceiveBooking';
import TutorialApp from './components/Tutorial/TutorialApp';
import Notification from './components/Notification/Notification';
import Inventory from './components/Inventory/Inventory';
import HeaderAfterLogin from './components/Header/HeaderAfterLogin';
import PrivateRoute from './components/PrivateRoute';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/homeContent" element={<HomeContent />} />
        <Route path="/featuresCard" element={<FeaturesCard />} />
        <Route path="/saleItem" element={<SaleItem />} />
        <Route path="/footer" element={<Footer />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contact" element={<ContactUsApp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/homeAfterLogin" element={<HomeAfterLogin />} />
        <Route path="/financialApp" element={<FinancialApp />} />
        <Route path="/products" element={<ProductsDisplay />} />
        <Route path="/bookingApp" element={<BookingApp />} />
        <Route path="/time-available" element={<TimeAvailable />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/receive-booking" element={<ReceiveBooking />} />
        <Route path="/tutorial" element={<TutorialApp />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
