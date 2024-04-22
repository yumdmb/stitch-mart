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
import ContactUs from './components/ContactUs/ContactUs';
import Profile from './components/Profile/Profile';
import HomeAfterLogin from './components/HomeAfterLogin/HomeAfterLogin';
import FinancialApp from './components/Financial/FinancialApp';

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
      <Route path="/contact" element={<ContactUs />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/homeAfterLogin' element={<HomeAfterLogin />} />
      <Route path="/financialApp" element={<FinancialApp/>} />
    </Routes>
  );
}

export default App;
