import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


export const BasicLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasicLayout>
        <App/>
      </BasicLayout>
    </BrowserRouter>
  </React.StrictMode>
);


