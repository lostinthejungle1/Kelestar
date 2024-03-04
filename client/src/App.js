import './App.css';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login'
import RegisterInfo from './pages/Register/RegisterInfo'
import RegisterRole from './pages/Register/RegisterRole';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import VendorRoutes from './routes/VendorRoutes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register-info' element={<RegisterInfo/>} />
        <Route path='/register-role' element={<RegisterRole/>} />
        <Route path='/vendor/*' element={<VendorRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
