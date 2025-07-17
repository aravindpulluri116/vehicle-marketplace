import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import MainShowroom from './pages/MainShowroom';
import YourOrders from './pages/YourOrders';
import HelpPage from './pages/Help';
import Account from './pages/Account';
import CarInfo from './pages/CarInfo';
import BuyPage from './pages/BuyPage'; // ✅ Add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<MainShowroom />} />
        <Route path="/your-orders" element={<YourOrders />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/info/:carId" element={<CarInfo />} />
        <Route path="/buy-now" element={<BuyPage />} /> {/* ✅ THIS IS KEY */}
      </Routes>
    </Router>
  );
}

export default App;
