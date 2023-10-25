import React, {Children, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider, useAppContext } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"

export const BasicLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
};

function App() {

  return (
      <div className="App">
       
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<BasicLayout />}/> */}
              <Route path="home" element={<Home/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="dentista/:id" element={<Detail/>} />
              <Route path="favs" element={<Favs/>} />
              <Route path="*" element={<div>Error 404</div>} />
            </Routes>
          </BrowserRouter>
       
      </div>
  );
}

export default App;
