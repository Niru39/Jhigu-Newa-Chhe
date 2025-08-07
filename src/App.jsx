import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import BookNow from './components/BookNow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/about' element ={<About/>}></Route>
        <Route path='/menu' element ={<Menu/>}></Route>
        <Route path='/gallery' element ={<Gallery/>}></Route>
         <Route path='/booknow' element ={<BookNow/>}></Route>
        <Route path='/contact' element ={<Contact/>}></Route>   
        </Routes>  
     <Footer/>  
       </>
  );
};

export default App;
