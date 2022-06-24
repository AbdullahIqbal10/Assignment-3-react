import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import reportWebVitals from './reportWebVitals';
import Navbar from './Component/Navbar';
import Container from './Component/Container';
import MainCard from './Component/MainCard';
import Footer from './Component/Footer';
import Heading from './Component/Heading';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar/>
  <Container/>
  <Heading/>
<MainCard/>
<Footer/>
  {/* <CoverPage/>
  <About/> */}
  {/* <Project/> */}
  {/* <Contact/>
  <Footer/>
  <Dark/>
  <Top/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
