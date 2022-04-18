import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Services from './Components/Pages/Services/Services';
import About from './Components/Pages/About/About';
import Login from './Components/Pages/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Pages/SignUp/Signup';
import { Toaster } from 'react-hot-toast';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import Blog from './Components/Pages/Blog/Blog';
import Profile from './Components/Pages/Profile/Profile';
import Details from './Components/Pages/Details/Details';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={
        <RequiredAuth>
           <Services></Services>
        </RequiredAuth>
        }></Route>
        <Route path='/details/:detailsId' element={
          <RequiredAuth>
            <Details></Details>
          </RequiredAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='profile' element={<Profile></Profile>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
